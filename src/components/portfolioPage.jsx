import "../styles/portfolioPage.css";
import projects from "../db/projects.js";
import ProjectCard from "./projectCard.jsx";
import { useRef } from "react";



function PortfolioPage() {
    const proejctCards = useRef(getProjectCards(projects));


    function getProjectCards(projects) {
        const cards = [];
        for (let project of projects) {
            cards.push(
                <ProjectCard project={project} />
            );
        }
        return cards;
    };




    return (
        <main className="portfolio-page">
            <h2 className="portfolio-page-title">My Portfolio</h2>
            <div className="projects">
                {proejctCards.current}
            </div>
        </main>
    );
};



export default PortfolioPage;