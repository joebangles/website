function SiteHeader() {
    return (
        <>
            <header>
                <div className="subwidth-wrapper">
                    <a href="/">Quinn Colello</a>
                    <nav id="page-nav">
                        <ul>
                            <li><a href="learning">Learning</a></li>
                            <li><a href="other">Other</a></li>
                            <li><a href="/colello_resume_dec25.pdf" target="_blank" rel="noopener noreferrer">CV</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default SiteHeader