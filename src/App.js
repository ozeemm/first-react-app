import "./styles/main.css"

import Navigation from "./components/Navigation/Navigation"
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import IndexSection from "./components/IndexSection/IndexSection"
import ContactsSection from "./components/ContactsSection/ContactsSection"
import ProjectsSection from "./components/ProjectsSection/ProjectsSection"
import ProjectSection from "./components/ProjectSection/ProjectSection"

import project1Img from './img/projects/01-big.jpg'
import project2Img from './img/projects/02-big.jpg'

function App() {
  return index()
  //return projects()
  //return contacts()
  //return project1()
  //return project2()
}

function index(){
  return(
    <div className="App">
      <Navigation/>
      <Header/>
      <IndexSection/>
      <Footer/>
    </div>
  );
}
function projects(){
  return(
    <div className="App">
      <Navigation/>
      <ProjectsSection/>
      <Footer/>
    </div>
  );
}
function contacts(){
  return(
    <div className="App">
      <Navigation/>
      <ContactsSection/>
      <Footer/>
    </div>
  );
}
function project1(){
  return(
    <div className="App">
      <Navigation/>
      <ProjectSection title="Gaming streaming portal" imgSrc={project1Img}/>
      <Footer/>
    </div>
  )
}
function project2(){
  return(
    <div className="App">
      <Navigation/>
      <ProjectSection title="Video service" imgSrc={project2Img}/>
      <Footer/>
    </div>
  )
}

export default App;