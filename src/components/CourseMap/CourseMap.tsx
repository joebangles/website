import { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import './CourseMap.css';
import { nodesData, linksData, typeColors } from './courseMapData';
import useForceSimulation from './useForceSimulation';
import type { SimLink, SimNode } from './useForceSimulation';

function getAllPrereqIds(nodeId: string, links: SimLink[]): Set<string> {
    const result = new Set<string>();
    const stack = [nodeId];
    while (stack.length > 0) {
        const current = stack.pop()!;
        for (const link of links) {
            if (link.target.id === current && !result.has(link.source.id)) {
                result.add(link.source.id);
                stack.push(link.source.id);
            }
        }
    }
    return result;
}

// Returns a map of prereq ID → link strength ("required" or "recommended").
// If any link on the path from the prereq to nodeId is "recommended", the prereq is marked "recommended".
function getAllPrereqStrengths(nodeId: string, links: SimLink[]): Map<string, "required" | "recommended"> {
    const result = new Map<string, "required" | "recommended">();
    // Track the strength reaching each node (nodeId itself starts as "required")
    const strengths = new Map<string, "required" | "recommended">();
    strengths.set(nodeId, "required");
    const stack = [nodeId];
    while (stack.length > 0) {
        const current = stack.pop()!;
        const currentStrength = strengths.get(current)!;
        for (const link of links) {
            if (link.target.id === current) {
                const edgeStrength = link.type === "recommended" || currentStrength === "recommended"
                    ? "recommended" : "required";
                const existing = result.get(link.source.id);
                // Only visit if we haven't seen it, or if we found a stronger (required) path
                if (!existing || (existing === "recommended" && edgeStrength === "required")) {
                    result.set(link.source.id, edgeStrength);
                    strengths.set(link.source.id, edgeStrength);
                    stack.push(link.source.id);
                }
            }
        }
    }
    return result;
}

function isLinkHighlighted(link: SimLink, activeId: string, prereqIds: Set<string>): boolean {
    const allRelevant = new Set(prereqIds);
    allRelevant.add(activeId);
    return allRelevant.has(link.target.id) && allRelevant.has(link.source.id);
}

const ASPECT_RATIO = 0.6;

function CourseMap() {
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);
    const [selectedNode, setSelectedNode] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 900, height: 540 });

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const observer = new ResizeObserver(entries => {
            const w = entries[0].contentRect.width;
            setDimensions({ width: w, height: w * ASPECT_RATIO });
        });
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const { nodes, links, radius } = useForceSimulation(nodesData, linksData, dimensions.width, dimensions.height);

    // The active node is hovered (priority) or selected
    const activeNode = hoveredNode ?? selectedNode;

    const prereqIds = useMemo(() => {
        if (!activeNode) return null;
        return getAllPrereqIds(activeNode, links);
    }, [activeNode, links]);

    // All transitive prerequisites for the selected node, with link strength
    const selectedPrereqStrengths = useMemo(() => {
        if (!selectedNode) return null;
        return getAllPrereqStrengths(selectedNode, links);
    }, [selectedNode, links]);

    const selectedPrereqNodes = useMemo(() => {
        if (!selectedPrereqStrengths) return [];
        return nodesData
            .filter(n => selectedPrereqStrengths.has(n.id))
            .map(n => ({ ...n, strength: selectedPrereqStrengths.get(n.id)! }));
    }, [selectedPrereqStrengths]);

    const handleNodeClick = useCallback((nodeId: string) => {
        setSelectedNode(prev => prev === nodeId ? null : nodeId);
    }, []);

    const handleSvgClick = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
        if ((e.target as SVGElement).closest('.course-node')) return;
        setSelectedNode(null);
    }, []);

    function nodeOpacity(node: SimNode): number {
        if (!prereqIds || !activeNode) return 1;
        if (node.id === activeNode || prereqIds.has(node.id)) return 1;
        return 0.15;
    }

    function linkOpacity(link: SimLink): number {
        if (!prereqIds || !activeNode) return 0.6;
        if (isLinkHighlighted(link, activeNode, prereqIds)) return 1;
        return 0.08;
    }

    function linkWidth(link: SimLink): number {
        if (!prereqIds || !activeNode) return 1.5;
        if (isLinkHighlighted(link, activeNode, prereqIds)) return 2.5;
        return 1;
    }

    // Shorten line endpoints so arrows don't overlap circles
    function linkEndpoint(link: SimLink, axis: 'x' | 'y'): number {
        const dx = link.target.x - link.source.x;
        const dy = link.target.y - link.source.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist === 0) return link.target[axis];
        const offset = axis === 'x' ? dx : dy;
        return link.target[axis] - (offset * (radius + 4)) / dist;
    }

    // Build legend from unique types present in nodes
    const legendTypes = useMemo(() => {
        const seen = new Set<string>();
        return nodesData
            .map(n => n.type)
            .filter(t => { if (seen.has(t)) return false; seen.add(t); return true; });
    }, []);

    const selectedNodeData = selectedNode ? nodesData.find(n => n.id === selectedNode) : null;

    return (
        <div className="course-map-container" ref={containerRef}>
            <svg
                viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
                className="course-map"
                onClick={handleSvgClick}
            >
                <defs>
                    {Object.entries(typeColors).map(([type, color]) => (
                        <marker
                            key={type}
                            id={`arrow-${type}`}
                            viewBox="0 -5 10 10"
                            refX={10}
                            refY={0}
                            markerWidth={12}
                            markerHeight={12}
                            orient="auto"
                            markerUnits="userSpaceOnUse"
                        >
                            <path d="M0,-4L10,0L0,4" fill={color} />
                        </marker>
                    ))}
                </defs>

                {links.map((link, i) => (
                    <line
                        key={i}
                        x1={link.source.x}
                        y1={link.source.y}
                        x2={linkEndpoint(link, 'x')}
                        y2={linkEndpoint(link, 'y')}
                        stroke={typeColors[link.source.type]}
                        strokeWidth={linkWidth(link)}
                        strokeDasharray={link.type === "recommended" ? "5,5" : "none"}
                        opacity={linkOpacity(link)}
                        markerEnd={`url(#arrow-${link.source.type})`}
                    />
                ))}

                {nodes.map(node => (
                    <g
                        key={node.id}
                        transform={`translate(${node.x},${node.y})`}
                        onMouseEnter={() => setHoveredNode(node.id)}
                        onMouseLeave={() => setHoveredNode(null)}
                        onClick={() => handleNodeClick(node.id)}
                        opacity={nodeOpacity(node)}
                        className="course-node"
                    >
                        <circle
                            r={radius}
                            fill={typeColors[node.type]}
                            stroke={selectedNode === node.id ? "#333" : hoveredNode === node.id ? "#333" : "none"}
                            strokeWidth={2}
                        />
                        <text
                            textAnchor="middle"
                            dy={radius * 0.23}
                            fontSize={node.name.length > 4 ? radius * 0.45 : radius * 0.59}
                            fontWeight="bold"
                            fill="#fff"
                        >
                            {node.name}
                        </text>
                    </g>
                ))}
            </svg>

            <div className="course-map-legend">
                {legendTypes.map(type => (
                    <span key={type} className="legend-item">
                        <span
                            className="legend-dot"
                            style={{ backgroundColor: typeColors[type] }}
                        />
                        {type.toUpperCase()}
                    </span>
                ))}
                <span className="legend-item legend-line-info">
                    <span className="legend-line-solid" /> required
                </span>
                <span className="legend-item legend-line-info">
                    <span className="legend-line-dashed" /> recommended
                </span>
                <span className="legend-item legend-credit">
                    Inspired by <a href='https://math.berkeley.edu/~musa/exposition' target='_blank'>Andrew DeLapo</a>
                </span>
            </div>

            <div className="course-info-panel">
                {selectedNodeData ? (
                    <>
                        <div className="course-info-title">
                            <span
                                className="course-info-dot"
                                style={{ backgroundColor: typeColors[selectedNodeData.type] }}
                            />
                            {selectedNodeData.fullName}
                        </div>
                        {selectedPrereqNodes.length > 0 && (
                            <div className="course-info-prereqs">
                                <span className="course-info-prereqs-label">Prerequisites (Click to change focus):</span>
                                <ul>
                                    {selectedPrereqNodes.map(node => (
                                        <li
                                            key={node.id}
                                            className="course-info-prereq"
                                            onClick={() => setSelectedNode(node.id)}
                                        >
                                            <span
                                                className="course-info-dot"
                                                style={{ backgroundColor: typeColors[node.type] }}
                                            />
                                            {node.fullName}
                                            {node.strength === "recommended" && <span className="course-info-tag">(recommended)</span>}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="course-info-empty">Click a node to begin</div>
                )}
            </div>
        </div>
    );
}

export default CourseMap;
