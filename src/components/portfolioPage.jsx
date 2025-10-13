import "../styles/portfolioPage.css";
import projects from "../db/projects.js";
import ProjectCard from "./projectCard.jsx";
import { useRef } from "react";



function PortfolioPage() {
    const proejctCards = useRef(getProjectCards(projects));


    function getProjectCards(projects) {
        const cards = [];
        for (let i = 0; i < projects.length; i += 1) {
            const project = projects[i];
            const flipCard = i % 2 !== 0;

            cards.push(
                <ProjectCard 
                    project={project} 
                    key={project.title} 
                    flipCard={flipCard} 
                />
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