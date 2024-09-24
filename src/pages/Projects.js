import Navigation from "../components/Navigation/Navigation"
import ProjectsSection from "../components/ProjectsSection/ProjectsSection"
import Footer from "../components/Footer/Footer"

function Projects(){
    return(
        <div className="App">
            <Navigation/>
            <ProjectsSection/>
            <Footer/>
        </div>
    );
}

export default Projects