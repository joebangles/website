import "./Home.css";
import graduation from '../assets/graduation.jpg'

function App() {
    return (
        <>
            <div id="frontpage-content">
                <div id="profile">
                    <img src={graduation} alt="profile picture" id="me-photo" />
                    <span>Quinn Colello</span>
                    <span> </span>
                    <span className="sub-profile">B.A. in Computer Science</span>
                    <span className="sub-profile">B.A. in Applied Mathematics</span>
                    <span className="sub-profile">Berkeley, CA - Carlsbad, CA</span>
                    <span className="sub-profile">quinncolello1@gmail.com</span>
                    <span className="sub-profile">
                        <a href="https://www.linkedin.com/in/quinncolello/" target="_blank">LinkedIn</a> - <a href="https://github.com/joebangles" target="_blank">GitHub</a>
                    </span>
                </div>
                <div id="main-body">
                    <h2>About Me</h2>
                    Undergraduate studying Computer Science and Applied Mathematics @ UC Berkeley. Graduating in 2027.
                </div>
            </div>
        </>
    )
}

export default App
