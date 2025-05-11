import './styles/Experience.css';

export function Timeline(){

    return(

       <section className="timeLine">
           
           <h1 className="timeLine-title">Experiencia Laboral</h1>
            
            <div className="timeLine-container">

                <ul className='timeLine-list'>
                    <li className='timeLine-point'>

                        <div className='timeLine-desc' >
                        
                            <span className='timeLine-jobName'>Tutor De Programación</span>
                            <span className='timeLine-date'>Febrero 2025 - Presente</span>

                        </div>

                        <p className='timeLine-text'>
                            
                            <span><span className="purple-arrow">➤</span> Tutorías particulares en C++ y Python a compañeros universitarios.</span>                          
                            <span><span className="purple-arrow">➤</span> Apoyo en lógica de programación, solución de ejercicios y preparación para exámenes</span>                          
                        </p> 

                    </li>

                    <li className='timeLine-point'>

                        <div className='timeLine-desc'>

                            <span className='timeLine-jobName'>Freelance Java</span>
                            <span className='timeLine-date'>Mayo 2021 - Marzo 2022</span>

                        </div>



                        <div className="timeLine-text">
                            <span><span className="purple-arrow">➤</span> 25+ proyectos para clientes internacionales</span>
                            <span><span className="purple-arrow">➤</span> Mods personalizados para Minecraft(Java), soluciones académicas y aplicaciones</span>
                            <span><span className="purple-arrow">➤</span> Calificación promedio de 4.3 estrellas.</span>
                        </div>


                    </li>

                </ul>

            </div>
        </section>

    )


}