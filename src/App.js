import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import "./styles/main.css"

import Navigation from "./components/Navigation/Navigation"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home"
import Contacts from "./pages/Contacts"
import Projects from "./pages/Projects"
import Project from "./pages/Project"

function App() {
    return(
        <div className="app">
            <Router>
                <Navigation/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/project/:id" element={<Project/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;