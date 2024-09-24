import './ProjectsSection.css'
import ProjectItem from '../ProjectItem/ProjectItem';

import img1 from './img/01.jpg'
import img2 from './img/02.jpg'
import img3 from './img/03.jpg'
import img4 from './img/04.jpg'
import img5 from './img/05.jpg'
import img6 from './img/06.jpg'

function ProjectsSection(){
    return(
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    <ProjectItem to="/project/1" title="Gaming streaming portal" imgSrc={img1}/>
                    <ProjectItem to="/project/2" title="Video service" imgSrc={img2}/>
                    <ProjectItem to="/project/3" title="Video portal" imgSrc={img3}/>
                    <ProjectItem to="/project/4" title="Dating app" imgSrc={img4}/>
                    <ProjectItem to="/project/5" title="Landing" imgSrc={img5}/>
                    <ProjectItem to="/project/6" title="Gaming community" imgSrc={img6}/>
                </ul>
            </div>
        </main>
    );
}

export default ProjectsSection;