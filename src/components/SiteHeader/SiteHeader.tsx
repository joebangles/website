import { Link } from "react-router";
import './SiteHeader.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useState, useEffect, useRef} from "react"

function SiteHeader() {
    const [learningOpen, setLearningOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setLearningOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            <header>
                <div className="subwidth-wrapper">
                    <div className="navigation-container">
                        <Link to="/" className="navlink navlink--type-home">Home</Link>

                        <div className="nav-dropdown navlink--position-leftmost" ref={dropdownRef}>
                            <span className="navlink navlink--dropdown-button" onClick={() => setLearningOpen(o => !o)}>
                                Learning <FontAwesomeIcon icon={["fas", learningOpen ? "caret-up" : "caret-down"]} />
                            </span>
                            {learningOpen && (
                                <div className="nav-dropdown-menu">
                                    <Link to="/course-list" className="navlink nav-dropdown-item" onClick={() => setLearningOpen(false)}>Course List</Link>
                                    <Link to="/course-map" className="navlink nav-dropdown-item" onClick={() => setLearningOpen(false)}>Course Map</Link>
                                </div>
                            )}
                        </div>
                        <a href="/quinn_colello_resume.pdf" target="_blank" rel="noopener noreferrer" className="navlink">Resume</a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default SiteHeader