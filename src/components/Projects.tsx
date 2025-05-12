import './styles/Projects.css'
import { useState } from 'react';

export function Projects(){

    return(

        <section className='projects-body'>

            <h1 className='projects-title'>Proyectos</h1>

            <div className='projects-cards'>
            
                <Card 
                    link='https://github.com/0JK0/JayNotes'

                    image='src/assets/Projects/JayNotes-icon.webp'
                    hoverImage='src/assets/Projects/JayNotes-homeScreen.webp' 
                    title='JayNotes' 
                    
                    tagImage='src/assets/techLogos/javascript-logo-svgrepo-com.svg' 
                    tagText='JavaScript'
                    tagImage2='src/assets/techLogos/react-2.svg'
                    tagText2='ReactNative'

                    description="A simple and efficient note taking app for Android. 
                    It allows you to create and manage text, audio, and video notes, and organize them by date using an integrated calendar. 
                    The app also supports multiple user profiles"
                />


            </div>



        </section>
    )

}


interface Props{

    image: string | undefined;
    hoverImage?: string;
    title: string  | null;

    tagImage: string;
    tagText: string;
    tagImage2: string;
    tagText2: string;
    description: string;

    link: string;
}



function Card({image,hoverImage,title,tagImage,tagText,tagImage2,tagText2,description,link}:Props){
    
    const [isHovered, setIsHovered] = useState(false);

    const handleCardClick = () => {
        if (link) {
            window.open(link, '_blank','noopener noreferrer');
        }
  };
    
    return(

        <article className='card-body' onMouseEnter={()=> setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={handleCardClick}>

            <div className='card-image-container'>
                <img 
                    alt='projectPic' 
                    loading='lazy' 
                    src={isHovered && hoverImage ? hoverImage : image} 
                    width={300} height={250}
                    className={`card-image ${isHovered ? 'hovered' : ''}`}
                />
            </div>


            <div className='card-info'> 
                <span className='card-title'>{title}</span>
                
                <div className='card-tagContainer'>
                
                    <Tag image={tagImage} text={tagText} />
                    <Tag image={tagImage2} text={tagText2} />

                </div>                
            </div>

            <div className='card-desc'>
                <p className='card-desc-text'>{description}</p>

            </div>
                        


        </article>

    )

}


interface tagProps {

    text: string | undefined;
    image: string | undefined;

}

function Tag({text,image}:tagProps){

    return(

        <div className='tag-container'>
            
            <div className='tag-image'>
                <img src={image} alt='.' loading='lazy'/> 
            </div>

           <span className='tag-text'>{text} </span> 
        </div>

    )

}