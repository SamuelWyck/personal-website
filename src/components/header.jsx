import "../styles/header.css";
import linkedinImg from "../assets/linkedin.svg";
import githubImg from "../assets/github.svg";



function Header() {
    return (
        <header>
            <div className="header-patch"></div>
            <div className="header-backing"></div>
            <p className="header-title">Samuel Wycklendt</p>
            <nav className="header-nav">
                <a href="https://www.linkedin.com/in/swycklendt/">
                    <img src={linkedinImg} alt="linkedin" />
                    <p>LinkedIn</p>
                </a>
                <a href="https://github.com/SamuelWyck?tab=repositories">
                    <img src={githubImg} alt="github" />
                    <p>GitHub</p>
                </a>
                <a href="#">Blog</a>
            </nav>
        </header>
    );
};



export default Header;