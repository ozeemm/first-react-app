import './ProjectItem.css'

function ProjectItem({title, imgSrc}){
    return(
        <li className="project">
            <a href="./project-page.html">
                <img src={imgSrc} alt="Project img" className="project__img"/>
                <h3 className="project__title">{title}</h3>
            </a>
        </li>
    );
}

export default ProjectItem