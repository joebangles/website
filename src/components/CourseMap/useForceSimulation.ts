import { useEffect, useRef, useState } from 'react';
import {
    forceSimulation,
    forceLink,
    forceX,
    forceY,
    forceCollide,
    type SimulationNodeDatum,
    type SimulationLinkDatum,
} from 'd3-force';
import type { CourseNode, CourseLink } from './courseMapData';
import { typePositions, levelPositions } from './courseMapData';

export interface SimNode extends SimulationNodeDatum, CourseNode {
    x: number;
    y: number;
}

export interface SimLink extends SimulationLinkDatum<SimNode> {
    source: SimNode;
    target: SimNode;
    type: "required" | "recommended";
}

export default function useForceSimulation(
    nodesData: CourseNode[],
    linksData: CourseLink[],
    width: number,
    height: number,
) {
    const radius = Math.max(10, width * 22 / 900);
    const simRef = useRef<ReturnType<typeof forceSimulation<SimNode>> | null>(null);
    const [nodes, setNodes] = useState<SimNode[]>([]);
    const [links, setLinks] = useState<SimLink[]>([]);

    useEffect(() => {
        const simNodes: SimNode[] = nodesData.map(d => ({
            ...d,
            x: typePositions[d.type] * width,
            y: levelPositions[d.level] * height,
        }));

        const simLinks: SimLink[] = linksData.map(d => ({
            source: d.source as unknown as SimNode,
            target: d.target as unknown as SimNode,
            type: d.type
        }));

        const simulation = forceSimulation<SimNode>(simNodes)
            .force("link", forceLink<SimNode, SimLink>(simLinks).id(d => d.id).strength(0.1))
            .force("x", forceX<SimNode>()
                .x(d => typePositions[d.type] * width)
                .strength(3)
            )
            .force("y", forceY<SimNode>()
                .y(d => levelPositions[d.level] * height)
                .strength(3)
            )
            .force("collide", forceCollide<SimNode>(radius * 2.5))
            .alphaDecay(0.1)
            .on("tick", () => {
                for (const n of simNodes) {
                    n.x = Math.max(radius, Math.min(width - radius, n.x));
                    n.y = Math.max(radius, Math.min(height - radius, n.y));
                }
                setNodes(simNodes.map(n => ({ ...n })));
                setLinks(simLinks.map(l => ({ ...l })));
            });
        simRef.current = simulation;

        return () => {
            simulation.stop();
        };
    }, [nodesData, linksData, width, height, radius]);

    return { nodes, links, radius: radius };
}
