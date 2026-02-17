import { Link } from "react-router";
import './SiteHeader.css'

function SiteHeader() {
    return (
        <>
            <header>
                <div className="subwidth-wrapper">
                    <div className="navigation-container">
                        <Link to="/" className="navlink navlink--type-home">Home</Link>
                        <Link to="/learning" className="navlink navlink--position-leftmost">Learning</Link>
                        {/* <Link to="/other" className="navlink">Other</Link> */}
                        <a href="/colello_cv.pdf" target="_blank" rel="noopener noreferrer" className="navlink">CV</a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default SiteHeader