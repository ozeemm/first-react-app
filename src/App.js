import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import "./styles/main.css"

import Start from "./pages/Start"
import Contacts from "./pages/Contacts"
import Projects from "./pages/Projects"
import Project from "./pages/Project"

function App() {
    return(
    <Router>
        <Routes>
            <Route path="/" element={<Start/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/project/:id" element={<Project title="Тут про проект"/>}/>
        </Routes>
    </Router>
    );
}

export default App;