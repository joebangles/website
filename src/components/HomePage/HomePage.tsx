import "./HomePage.css";
// import graduation from '../../assets/graduation.jpg'
// import headshot from '../../assets/feb_headshot.jpg'
// import headshot2 from '../../assets/DSC02704_crop3.jpg'
import headshot_edited from '../../assets/DSC02704_crop4_edited.jpg'

function App() {
    return (
        <>
        <div className="frontpage-name">
            Quinn Colello
        </div>
        <div className="frontpage-content">
            <div className="frontpage-left-column">
                <img src={headshot_edited} alt="profile picture" className="frontpage-headshot" />
                <div className="profile-text">
                    <span>Quinn Colello</span>
                    <span className="profile-text-line">B.A. in Computer Science</span>
                    <span className="profile-text-line">B.A. in Applied Mathematics</span>
                    <span className="profile-text-line">Berkeley, CA - Carlsbad, CA</span>
                    <span className="profile-text-line">quinncolello1 at gmail dot com</span>
                    <span className="profile-text-line">
                        <a href="https://www.linkedin.com/in/quinncolello/" target="_blank">LinkedIn</a> - <a href="https://github.com/joebangles" target="_blank">GitHub</a>
                    </span>
                </div>
            </div>
            <div className="frontpage-right-column">
                <div className="profile">
                    Undergraduate studying Computer Science and Applied Mathematics at UC Berkeley. I'm graduating in 2027.
                    <br />
                    <br />
                    I want to build real code powered by interesting theory. 
                </div>
            </div>
        </div>
        </>
    )
}

export default App
