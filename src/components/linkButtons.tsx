import './styles/linkButtons.css';

interface Props {

    text: string | null;
    image: string | null;
    href: string;

}

export function LinkButton({text, image,href}: Props){

    return(

        <a href={href} className="moiButton" target="_blank" rel="noopener noreferrer">
        {text} 
        {image && <img src={image} className="moiButton-logo" alt="button logo" loading='lazy' width={50} height={50} />}
      </a>

        
    )

}


