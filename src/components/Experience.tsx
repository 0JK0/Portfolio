import './styles/Experience.css';

export function Timeline(){

    return(

       <section className="timeLine">
           
           <h1 className="timeLine-title">Experiencia Laboral</h1>
            
            <div className="timeLine-container">

                <ul className='timeLine-list'>
                    <li className='timeLine-point'>
                        <span className='timeLine-jobName'>Tutor De Programación</span>
                        <span className='timeLine-date'>Febrero 2025 - Presente</span>

                        <p className='timeLine-text'>Lorem Ipsum, sigmaboy, trowhs gyatt, no pole dont toliver</p> 
                    </li>
                    <li className='timeLine-point'>
                        <span className='timeLine-jobName'>Freelance Java</span>
                        <span className='timeLine-date'>Junio 2021 - Marzo 2022</span>

                        <p className='timeLine-text'> 
                            25+ proyectos para clientes internacionales <br/> <br/>  
                            Mods personalizados para Minecraft(Java), soluciones académicas y aplicaciones <br/> <br/>
                            Calificación promedio de 4.3 estrellas. <br/> <br/>
                        </p>
                    </li>
                </ul>

            </div>
        </section>

    )


}