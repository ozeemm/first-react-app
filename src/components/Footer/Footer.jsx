import './Footer.css'

import vkLogoImg from './img/vk.svg'
import instLogoImg from './img/instagram.svg'
import twitterLogoImg from './img/twitter.svg'
import githubLogoImg from './img/gitHub.svg'
import linkedInLogoImg from './img/linkedIn.svg'

function Footer(){
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="#!"><img src={vkLogoImg} alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src={instLogoImg} alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src={twitterLogoImg} alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src={githubLogoImg} alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src={linkedInLogoImg} alt="Link"/></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2024 frontend-react</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer