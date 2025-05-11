import './styles/Projects.css'

export function projects(){

    


}


interface Props{

    image: string | undefined;
    title: string  | null;
    tagText: string;
    tagImage: string;

}

function Card({image,title,tagImage,tagText}:Props){

    return(

        <article className='card-body'>
            <img alt='projectPic' loading='lazy' src={image} width={200} height={200}/>

            <div className='card-info'> 
                <span className='card-title'>{title}</span>

                <Tag image={tagImage} text={tagText}/>

            </div>

        </article>

    )

}


interface Props {

    text: string | null;
    image: string | undefined;

}

function Tag({text,image}:Props){

    return(

        <div className='tag-container'>
            
            <div className='tag-image'>
                <img src={image} alt='.' loading='lazy'/> 
            </div>

           <span className='tag-text'>{text} </span> 
        </div>

    )

}