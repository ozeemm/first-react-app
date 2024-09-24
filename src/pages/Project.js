import ProjectSection from "../components/ProjectSection/ProjectSection"

import projectImg from "../img/projects/01-big.jpg"

function Project(){
    return(
        <ProjectSection title="Тут про проект" imgSrc={projectImg}/>
    );
}

export default Project