import Navigation from "../components/Navigation/Navigation"
import ProjectSection from "../components/ProjectSection/ProjectSection"
import Footer from "../components/Footer/Footer"

import projectImg from "../img/projects/01-big.jpg"

function Project({title}){
    return(
        <div className="App">
            <Navigation/>
            <ProjectSection title={title} imgSrc={projectImg}/>
            <Footer/>
        </div>
    );
}

export default Project