import { NavLink } from 'react-router-dom'

import './Navigation.css'

import SunImg from './img/sun.svg'
import MoonImg from './img/moon.svg'

function Navigation(){
    const normalLink = "nav-list__link"
    const activeLink = normalLink + " nav-list__link--active"

    return(
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo">
                        <strong>Freelancer</strong> portfolio
                    </NavLink>

                    <button className="dark-mode-btn">
                        <img src={SunImg} alt="Light mode" className="dark-mode-btn__icon"/>
                        <img src={MoonImg} alt="Dark mode" className="dark-mode-btn__icon"/>
                    </button>

                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>Home</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/projects" className={({isActive}) => isActive ? activeLink : normalLink}>Projects</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/contacts" className={({isActive}) => isActive ? activeLink : normalLink}>Contacts</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation