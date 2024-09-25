import './DarkModeButton.css'
import { useEffect, useState } from 'react'

import SunImg from './img/sun.svg'
import MoonImg from './img/moon.svg'

function DarkModeButton(){
    const lightState = "dark-mode-btn"
    const darkState = lightState + " dark-mode-btn--active"
    
    const [isDark, setIsDark] = useState(false)

    useEffect(() => { 

        if(isDark)
            document.body.classList.add("dark");
        else
            document.body.classList.remove("dark");
        
    }, [isDark])

    function switchColorMode(){
        setIsDark(!isDark)
    }

    return(
        <button className={isDark ? darkState : lightState} onClick={switchColorMode}>
            <img src={SunImg} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={MoonImg} alt="Dark mode" className="dark-mode-btn__icon" />
        </button>
    );
}

export default DarkModeButton