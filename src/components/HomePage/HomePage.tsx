import "./HomePage.css";
import graduation from '../../assets/graduation.jpg'
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        fetch("https://www.ocf.berkeley.edu/~qcolello/blog_api/run.fcgi/posts/?limit=1")
            .then(res => res.json())
            .then(data => console.log(data));
    }, []);

    return (
        <div className="frontpage-content">
            <div className="profile">
                <img src={graduation} alt="profile picture" className="profile-photo" />
                <div className="profile-text">
                    <span>Quinn Colello</span>
                    <span className="profile-text-line">B.A. in Computer Science</span>
                    <span className="profile-text-line">B.A. in Applied Mathematics</span>
                    <span className="profile-text-line">Berkeley, CA - Carlsbad, CA</span>
                    <span className="profile-text-line">quinncolello1@gmail.com</span>
                    <span className="profile-text-line">
                        <a href="https://www.linkedin.com/in/quinncolello/" target="_blank">LinkedIn</a> - <a href="https://github.com/joebangles" target="_blank">GitHub</a>
                    </span>
                </div>
            </div>
            <div id="main-body">
                <h2>About Me</h2>
                Undergraduate studying Computer Science and Applied Mathematics at UC Berkeley. Graduating in 2027.
            </div>
        </div>
    )
}

export default App
