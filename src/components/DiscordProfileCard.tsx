import './styles/DiscordProfileCard.css'

import IdleStatus from '../assets/StatusImg/idle.png'

import More from '../assets/Other/more.png';
import Friend from '../assets/Other/friend.png';
import profileImage from '../assets/Other/profileImage.webp'
import catBanner from '../assets/Other/catgif.png'

import jsLogo from '../assets/techLogos/javascript-logo-svgrepo-com.svg';
import cLogo from '../assets/techLogos/c-1.svg';
import dartLogo from '../assets/techLogos/dart.svg';
import javaLogo from '../assets/techLogos/java-4.svg';
import luaLogo from '../assets/techLogos/lua-5.svg';
import mysqlLogo from '../assets/techLogos/mysql-logo-pure.svg';
import pythonLogo from '../assets/techLogos/python-5.svg';
import debianLogo from '../assets/techLogos/debian-2.svg';



// DiscordProfileCard-main

export function DiscordProfileCard(){

    return(

        <article className="DiscordProfileCard">

            <div className='DiscordProfileCard-background'>  
                <img src={catBanner} alt="Header" className='DiscordProfileCard-background-gif' loading='lazy' />
                <button className='DiscordProfileCard-friendButton'> <img src={Friend} alt="F" width="18" height="18"  /></button>
                <button className='DiscordProfileCard-moreButton'> <img src={More} alt='M' width="18" height="18"  /> </button>

            </div>

            <aside className="DiscordProfileCard-pfpContainer"> 

            <img 
                src= {profileImage} 
                alt="pfp" 
                className="DiscordProfileCard-pfpImage" 
                loading='lazy'
            />

            <img 

                src={IdleStatus} 
                alt="S" 
                className='DiscordProfileCard-status' 
                loading='lazy'
            /> 

            </aside>

            <div className='DiscordProfileCard-userZone'>

                <span className='DiscordProfileCard-name'>Jay</span>

                <div className='DiscordProfileCard-info'>

                    <span className='DiscordProfileCard-userName'>@jk1ng_</span>
                    <span className='DiscordProfileCard-pronouns'> • He/Him</span>
                    

                </div>


            </div>

            <div className='DiscordProfileCard-mutuals'> 18 años  • Colombiano 🇨🇴 </div>

            <div className='DiscordProfileCard-bio'>
                <strong>About Me</strong>

                <div className='DiscordProfileCard-bioText'>

                    <span className="purple-arrow">➤</span> Software Dev <br/>
                    <span className="purple-arrow">➤</span> Building Things I Use <br/>
                    <span className="purple-arrow">➤</span> Always Learning

                </div>


            </div>

            <div className='DiscordProfileCard-rolesContainer'>

                <div className='DiscordProfileCard-rolesContainer-title'>
                   <strong>Roles</strong> 

                </div>

                <div className='DiscordProfileCard-rolesContainer-grid'>
                    
                    <RolesTag image={jsLogo} text={'JavaScript'} />
                    <RolesTag image={cLogo} text={'C/C++'} />
                    <RolesTag image={dartLogo} text={'Dart'} />
                    <RolesTag image={javaLogo} text={'Java'} />
                    <RolesTag image={luaLogo} text={'Lua'} />
                    <RolesTag image={mysqlLogo} text={'SQL'} />
                    <RolesTag image={pythonLogo} text={'Python'} />
                    <RolesTag image={debianLogo} text={'Linux'} />
                    
                </div> 
            
            </div>

            <div className='DiscordProfileCard-messageContainer'>

                <input className="DiscordProfileCard-messageBox" type="text" placeholder={`Message @Jay`} />
                <button className="DiscordProfileCard-sendButton" type="button" > ☺ </button>

            </div>
            

        </article>

            
 
    );
}

interface Props {

    text: string | null;
    image: string | undefined;

}


function RolesTag({text,image}:Props){

    return(

        <div className='rolesTag-container'>
            
            <div className='rolesTag-image'>
                <img src={image} alt='.' loading='lazy'/> 
            </div>

           <span className='rolesTag-text'>{text} </span> 
        </div>

    )

}