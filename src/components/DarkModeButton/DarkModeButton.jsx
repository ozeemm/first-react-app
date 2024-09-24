import './DarkModeButton.css'

import SunImg from './img/sun.svg'
import MoonImg from './img/moon.svg'

function DarkModeButton(){
    return(
        <button className="dark-mode-btn">
            <img src={SunImg} alt="Light mode" className="dark-mode-btn__icon"/>
            <img src={MoonImg} alt="Dark mode" className="dark-mode-btn__icon"/>
        </button>
    );
}

export default DarkModeButton