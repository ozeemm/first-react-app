import './ProjectSection.css'

import githubImg from './img/gitHub-black.svg'

function ProjectSection({title, imgSrc, skills, gitHubSrc}){
    return(
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{title}</h1>

                    <img src={imgSrc} alt="" className="project-details__cover"/>

                    <div className="project-details__desc">
                        <p>Skills: {skills}</p>
                    </div>

                    <a href={gitHubSrc} className="btn-outline">
                        <img src={githubImg} alt=""/>
                        GitHub repo
                    </a>

                </div>
            </div>
        </main>
    );
}

export default ProjectSection