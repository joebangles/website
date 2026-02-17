import "./HomePage.css";
// import graduation from '../../assets/graduation.jpg'
// import headshot from '../../assets/feb_headshot.jpg'
// import headshot2 from '../../assets/DSC02704_crop3.jpg'
import headshot_edited from '../../assets/DSC02704_crop4_edited.jpg'
import github_logo from '../../assets/github_logo.svg'
import linkedin_logo from '../../assets/linkedin_logo.png'

function App() {
    return (
        <div className="frontpage-content">
            <div className="frontpage-profile">
                <img src={headshot_edited} alt="profile picture" className="frontpage-headshot" />
                <div className="profile-text">
                    <span className="frontpage-name">Quinn Colello</span>
                    <span className="profile-text-line">Berkeley, CA - Carlsbad, CA</span>
                    <span className="profile-text-line">qcolello@berkeley.edu</span>
                    <span className="profile-text-line">
                        <a href="https://github.com/joebangles" target="_blank">
                            <img className="inline-logo" src={github_logo}/> github
                        </a>
                    </span>
                    <span className="profile-text-line">
                        <a href="https://www.linkedin.com/in/quinncolello/" target="_blank">
                            <img className="inline-logo" src={linkedin_logo}/> linkedin
                        </a>
                    </span>
                </div>
            </div>
            <div className="frontpage-main-content">
                <div>
                    Third year studying Computer Science and Applied Mathematics at <a href="https://www.berkeley.edu" target="_blank">UC Berkeley</a>.
                    <br />
                    <br />
                    Building real code powered by interesting theory. 
                </div>
            </div>
        </div>  
    )
}

export default App
