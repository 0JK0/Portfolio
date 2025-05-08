import './styles/DiscordProfileCard.css'

import IdleStatus from '../assets/StatusImg/idle.png'

import More from '../assets/Other/more.png';
import Friend from '../assets/Other/friend.png';
import profileImage from '../assets/Other/profileImage.jpg'
import tempMoi from '../assets/Other/tempMoi.webp';



// DiscordProfileCard-main


export function DiscordProfileCard(){

    return(

        <article className="DiscordProfileCard">

            <div className='DiscordProfileCard-background'>  
                <img src="src/assets/Other/catgif.png" alt="Header" className='DiscordProfileCard-background-gif'  />
                <button className='DiscordProfileCard-friendButton'> <img src={Friend} alt="F" width="18" height="18" type="button" /></button>
                <button className='DiscordProfileCard-moreButton'> <img src={More} alt='M' width="18" height="18" type="button" /> </button>

            </div>

            <aside className="DiscordProfileCard-pfpContainer"> 


            <img 
                src= {profileImage} 
                alt="pfp" 
                className="DiscordProfileCard-pfpImage" 
            />

            <img 

                src={IdleStatus} 
                alt="S" 
                className='DiscordProfileCard-status' 

            /> 

            </aside>

            <div className='DiscordProfileCard-userZone'>

                <strong className='DiscordProfileCard-name'>Jay</strong>

                <div className='DiscordProfileCard-info'>

                    <span className='DiscordProfileCard-userName'>@jk1ng_</span>
                    <span className='DiscordProfileCard-pronouns'> • He/Him</span>
                    {/* <span className='DiscordProfileCard-badges'> X - X </span> */}

                </div>


            </div>

            <div className='DiscordProfileCard-mutuals'> 4 Mutual Friends  • 20 Mutual servers  </div>

            <div className='DiscordProfileCard-bio'>

                <p className='DiscordProfileCard-bioText'> SIGMAAAAAA SIGMAAA BOYYYY</p>

            </div>

            <div className='DiscordProfileCard-messageContainer'>

                <input className="DiscordProfileCard-messageBox" type="text" placeholder={`Message @Jay`} />
                <button className="DiscordProfileCard-sendButton" type="button" > ☺ </button>

            </div>
            

        </article>

            
 
    );
}
