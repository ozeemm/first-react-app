import ProjectSection from "../components/ProjectSection/ProjectSection"

import projectImg from "../img/projects/01-big.jpg"

function Project(){
    return(
        <ProjectSection title="Тут про проект" skills="React, Node.js, MongoDB" 
                        imgSrc={projectImg} gitHubSrc="https://github.com"/>
    );
}

export default Project