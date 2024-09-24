import { NavLink } from 'react-router-dom';
import './ProjectItem.css'

function ProjectItem({title, imgSrc, to}){
    return(
        <li className="project">

            <NavLink to={to}>
                <img src={imgSrc} alt="Project img" className="project__img"/>
                <h3 className="project__title">{title}</h3>
            </NavLink>
        </li>
    );
}

export default ProjectItem