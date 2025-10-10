import "../styles/header.css";
import linkedinImg from "../assets/linkedin.svg";
import githubImg from "../assets/github.svg";
import ToolTipWrapper from "./toolTipWrapper";



function Header() {
    return (
        <header>
            <div className="header-patch"></div>
            <div className="header-backing"></div>
            <p className="header-title">Samuel Wycklendt</p>
            <nav className="header-nav">
                <ToolTipWrapper toolTip={"My LinkedIn"}>
                    <a href="https://www.linkedin.com/in/swycklendt/">
                        <img src={linkedinImg} alt="linkedin" />
                        <p>LinkedIn</p>
                    </a>
                </ToolTipWrapper>
                <ToolTipWrapper toolTip={"My GitHub"}>
                    <a href="https://github.com/SamuelWyck?tab=repositories">
                        <img src={githubImg} alt="github" />
                        <p>GitHub</p>
                    </a>
                </ToolTipWrapper>
                <ToolTipWrapper toolTip={"My Blog"}>
                    <a href="#">Blog</a>
                </ToolTipWrapper>
            </nav>
        </header>
    );
};



export default Header;