import './ProjectsSection.css'
import ProjectItem from '../ProjectItem/ProjectItem';
import { projectsData } from './ProjectsData';

function ProjectsSection(){
    return(
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    { 
                        projectsData.map((data, i) =>
                            <ProjectItem key={i} to={`/project/${i+1}`} title={data["title"]} imgSrc={data["smallImg"]}/>)
                    }
                </ul>
            </div>
        </main>
    );
}

export default ProjectsSection;