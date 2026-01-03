import { Link } from "react-router";

function SiteHeader() {
    return (
        <>
            <header>
                <div className="subwidth-wrapper">
                    <a href="/">Quinn Colello</a>
                    <nav id="page-nav">
                        <ul>
                            <li><Link to="/learning">Learning</Link></li>
                            <li><Link to="/other">Other</Link></li>
                            <li><a href="/colello_resume_dec25.pdf" target="_blank" rel="noopener noreferrer">CV</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default SiteHeader