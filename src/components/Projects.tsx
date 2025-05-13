import './styles/Projects.css'
import { useState } from 'react';

import jsLogo from '../assets/techLogos/javascript-logo-svgrepo-com.svg';
import reactLogo from '../assets/techLogos/react-2.svg';
import pythonLogo from '../assets/techLogos/python-5.svg';
import sqlLogo from '../assets/techLogos/mysql-logo-pure.svg';

import JayNotes_icon from '../assets/Projects/JayNotes-icon.webp';
import JayNotes_homeScreen from '../assets/Projects/JayNotes-homeScreen.webp';

import WorkoutTracker_icon from '../assets/Projects/Workout_Tracker-icon.webp';
import WorkoutTracker_mainMenu from '../assets/Projects/Workout_Tracker-mainMenu.webp'

export function Projects(){

    return(

        <section className='projects-body'>

            <h1 className='projects-title'>Proyectos</h1>

            <div className='projects-cards'>
            
                <Card 
                    link='https://github.com/0JK0/JayNotes'

                    image={JayNotes_icon}
                    hoverImage={JayNotes_homeScreen} 
                    title='JayNotes' 
                    
                    tagImage={jsLogo} 
                    tagText='JavaScript'
                    tagImage2={reactLogo}
                    tagText2='ReactNative'

                    description="Una aplicación sencilla y eficiente para tomar notas en Android. 
                    Permite crear y gestionar notas de texto, audio y video, y organizarlas por fecha mediante un calendario integrado. 
                    La app también admite múltiples perfiles de usuario."
                />

                <Card 
                    link='https://github.com/0JK0/Workout_Tracker'

                    image={WorkoutTracker_icon}
                    hoverImage={WorkoutTracker_mainMenu} 
                    title='Workout Tracker' 
                    
                    tagImage={pythonLogo} 
                    tagText='Python'
                    tagImage2={sqlLogo}
                    tagText2='Sqlite'

                    description="Una aplicación de Terminal(TUI), 
                    permite a los usuarios gestionar sus rutinas de ejercicio y registrar automáticamente su historial de entrenamientos. 
                    Incluye funciones para actualizar registros y rutinas existentes."
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