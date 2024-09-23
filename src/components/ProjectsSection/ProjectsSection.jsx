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
                    <ProjectItem title="Gaming streaming portal" imgSrc={img1}/>
                    <ProjectItem title="Video service" imgSrc={img2}/>
                    <ProjectItem title="Video portal" imgSrc={img3}/>
                    <ProjectItem title="Dating app" imgSrc={img4}/>
                    <ProjectItem title="Landing" imgSrc={img5}/>
                    <ProjectItem title="Gaming community" imgSrc={img6}/>
                </ul>
            </div>
        </main>
    );
}

export default ProjectsSection;