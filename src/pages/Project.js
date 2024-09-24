import Navigation from "../components/Navigation/Navigation"
import ProjectSection from "../components/ProjectSection/ProjectSection"
import Footer from "../components/Footer/Footer"

function Project(name, projectImg){
    return(
      <div className="App">
        <Navigation/>
        <ProjectSection title={name} imgSrc={projectImg}/>
        <Footer/>
      </div>
    )
}

export default Project