import '../../css/sectionskills.css';
import React from 'react';

export const SectionSkills = () => {
  return (
    <div className="panel-section section3 pe-md-5" id="skills">
      <h1 data-splitting className="bigh1 section-title">
        Skills
      </h1>
      <div className="container ps-md-2">
        
        <div className="skill-card row ">
          <div className="static-assets-panel col-6"></div>
          <div className="skill-card-text col-md-6">
            <h4 className='text-white font-monospace'>Desarrollo web</h4>
            <span>
              Sin lugar a dudas donde poseo más experiencia es en el desarrollo de software
              especialmente en desarrollo web, manejando los lenguajes de HTML, CSS y JavaScript, donde 
              soy capaz de plasmar cada uno de los requerimientos en un sistema / plataforma web, desde 
              algo básico como páginas de presentaciones, hasta complejos sistemas empresariales, siempre
              apegado a los últimos estándares de calidad de la industria
            </span>
          </div>
        </div>
        <div className="skill-card row mt-4">
          <div className="react-panel col-6 order-md-2"></div>
          <div className="react-text col-md-6 order-md-1">
          <h4 className='text-white font-monospace'>JS Frameworks</h4>
            <span>
              Principalmente desarrollo la mayoría de las soluciones que me tocan afrontar mediante el uso de 
              frameworks o librerías, en primera opción con React, y como segunda opción con Vue, sin desmerecimiento
              a la posibilidad de poder adaptarme a cualquier tipo de tecnología utilizada en algún sistema legado
              o algún requisito de desarrollo explícito por parte de clientes.
            </span>
          </div>
        </div>

        <div className="skill-card row mt-4">
          <div className="cloud-panel col-6"></div>
          <div className="cloud-text col-md-6">
          <h4 className='text-white font-monospace'>Servicios Cloud</h4>
            <span>
              Cuento con conocimientos para aprovechar los servicios en la nube, ofrecidos en su mayoría 
              por los gigantes de AWS, GCP y Azure, desde despliegues sencillos de archivos estáticos hasta 
              complejos ecosistemas aprovechando todas las ventajas que ofrecen este tipo de servcios hoy en día. 
              También se incluyen conocimientos en plataformas de menor envergadura tales como: Heroku, Vercel, DigitalOcean y Netlify
            </span>
          </div>
        </div>

        <div className="skill-card row mt-4">
          <div className="data-vis-panel col-6 order-md-2"></div>
          <div className="data-vis-text col-md-6">
          <h4 className='text-white font-monospace'>Visualización de datos</h4>
            <span>
              En un mundo donde la cantidad de datos se mueven de forma vertiginosa, es 
              practicamente esencial contar con un buen sistema o plataforma en la que los datos
              y la información puedan llegar de forma clara y precisa a ojos de sus interesados,
              para poder de esta manera tomar decisiones y acciones claves. Es por esto que no 
              hay nada mejor que el valor que aporta un dashboard con gráficos que muestren data e
              información en tiempo real, de forma dinámica, eficiente y fidedigna.
            </span>
          </div>
        </div>
        
      </div>
    </div>
  );
};
