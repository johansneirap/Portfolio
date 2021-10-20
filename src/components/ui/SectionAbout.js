import React from 'react'
import profilePhoto from '../../assets/profile.jpg'

export const SectionAbout = () => {
    return (
        <div className="panel-section section2 row align-items-center" id="about">
            
            <div className="col card-p">
            <h1 data-splitting className="bigh1 section-title"> Sobre mí</h1>
            <p> Hola que tal! soy Johans, desarrollador Full Stack asentado en la ciudad
                 de Villa Alemana, Región de Valparaíso, Chile.
            </p>
            <p> Hoy en día me encuentro cursando mi último año en la carrera de Ingeniería en Informática
                 en el Instituto profesional DuocUC sede Viña del Mar, donde a través de estos años he podido acumular gran conocimiento
                 en el área de la tecnología e informática, realizando proyectos tanto pedagógicos de tipo interno, como particulares de tipo externo.
                 <br></br>
              Aspiro a crear soluciones efectivas, innovadoras y satisfactorias a los requerimientos de cualquier proyecto informático.<br></br>
            
              Algunos de mis pasatiempos son:
            </p>
            <ul className="lista-pasatiempos">
              <li>Entusiasta del hardware</li>
              <li>Tiempo en familia</li>
              <li>Astronomía</li>
            </ul>
            
            </div>
          <div className="col-xs-12 col-md-6 img-container">
          <div className="frame-img">
            <img src={profilePhoto}></img>
          </div>
        </div>
        </div>
    )
}
