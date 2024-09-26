import { useParams } from "react-router-dom";
import ProjectSection from "../components/ProjectSection/ProjectSection"
import { projectsData } from "../components/ProjectsSection/ProjectsData"

function Project(){
    let { id } = useParams()

    const projectData = projectsData[id-1]

    return(
        <ProjectSection title={projectData["title"]} 
                        skills={projectData["skills"]} 
                        imgSrc={projectData["bigImg"]} 
                        gitHubSrc={projectData["gitHubSrc"] ? projectData["gitHubSrc"] : "#!"}/>
    );
}

export default Project