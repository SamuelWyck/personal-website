import "../styles/projectCard.css";
import downloadImg from "../assets/download.svg";
import gitHubImg from "../assets/github.svg";
import liveLink from "../assets/liveLink.svg";
import { useRef } from "react";
import ToolTipWrapper from "./toolTipWrapper.jsx";



function ProjectCard({project, flipCard}) {
    const techRef = useRef(getTechElements(project.techUsed));


    function getTechElements(techUsed) {
        const elements = [];
        for (let tech of techUsed) {
            elements.push(
                <li className="tech-name" key={tech}>- {tech}</li>
            );
        }
        return elements;
    };


    return (
        <article className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <section className={`main-info-section${flipCard ? " reverse" : ""}`}>
                <div className="project-img-wrapper">
                    <img src={project.bannerImg} alt="project picture" />
                </div>
                <div className="project-description">
                    <div className={`backing${flipCard ? " reverse" : ""}`}></div>
                    <p>{project.description}</p>
                </div>
            </section>
            <section className={`details-section${flipCard ? " reverse" : ""}`}>
                <div className="project-tech-info">
                    <nav className="project-links">
                        <ToolTipWrapper toolTip={"See project"}>
                        <a href={project.projectLink} target="_blank" referrerPolicy="no-referrer" >
                            <img src={liveLink} alt="see project" />
                        </a>
                        </ToolTipWrapper>
                        {!project.gitHubLink ||
                        <ToolTipWrapper toolTip={"See code"}>
                        <a href={project.gitHubLink} target="_blank" referrerPolicy="no-referrer" >
                            <img src={gitHubImg} alt="project github" />
                        </a>
                        </ToolTipWrapper>
                        }
                        {!project.downloadLink ||
                        <ToolTipWrapper toolTip={"Go to download page"}>
                        <a href={project.downloadLink} target="_blank" referrerPolicy="no-referrer" >
                            <img src={downloadImg} alt="download project" />
                        </a>
                        </ToolTipWrapper>
                        }
                    </nav>
                    <div className="tech-used">
                        <div className={`backing${flipCard ? " reverse" : ""}`}></div>
                        <p className="tech-used-title">Tech used</p>
                        <ul>
                            {techRef.current}
                        </ul>
                    </div>
                </div>
                <div className="project-details">
                    {project.details}
                </div>
            </section>
        </article>
    );
};



export default ProjectCard;