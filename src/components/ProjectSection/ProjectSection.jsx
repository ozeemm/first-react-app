import './ProjectSection.css'

import githubImg from './img/gitHub-black.svg'

function ProjectSection(props){
    return(
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{props.title}</h1>

                    <img src={props.imgSrc} alt="" className="project-details__cover"/>

                    <div className="project-details__desc">
                        <p>Skills: React, Node.js, MongoDB</p>
                    </div>

                    <a href="https://github.com/" className="btn-outline">
                        <img src={githubImg} alt=""/>
                        GitHub repo
                    </a>

                </div>
            </div>
        </main>
    );
}

export default ProjectSection