import './styles/head.css'

import { DiscordProfileCard } from './DiscordProfileCard.tsx';
import { LinkButton } from './linkButtons.tsx';

import githubLogo from '../assets/techLogos/github-icon-1.svg'
import linkedIn from '../assets/techLogos/linkedin-icon-1.svg';
import tempMoi from '../assets/Other/tempMoi.webp';

export function LandingHeader(){

    return(
        <section className="mainHeader">
            <div className="presentationContainer">

            <img src={tempMoi} alt="Moi" className="moiPicture" />
            <header className="myName">Julian Monsalve</header>
            <p className="meDesc">
                Desarrollador de software con experiencia freelance en aplicaciones móviles y desarrollo de videojuegos. 
                Dedico mi tiempo a crear soluciones que resuelven problemas reales y aparentan productos reales. 
                Busco oportunidades donde pueda contribuir, crecer y desafiarme a mí mismo.
            </p>

            <div className='buttonsContainer'>

                <LinkButton image={githubLogo} text={""} href='https://github.com/0JK0' />
                <LinkButton text='Hoja Vida' image={""} href='/JulianMonsalve-CV.pdf'/>
                <LinkButton image={linkedIn}  text={""} href='https://www.linkedin.com/in/julian-monsalve-69420-osorio'/>

            </div>

            </div>


            <DiscordProfileCard />
        </section>
    )


}