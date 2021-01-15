import React from 'react'

export const SectionIntro = () => {
    return (
        <div className="row section1" >
        <div className="col">
          <p className="hi animate__animated animate__fadeInDown animate__slow" style={{animationDelay: 550+'ms'}}>Hola, mi nombre es </p>
          <h1 data-splitting className="bigh1 animate__animated animate__fadeInDown animate__slow" style={{animationDelay: 600+'ms'}}>
            JOHANS NEIRA
          </h1>
          <h2 className="big-title animate__animated animate__fadeInDown animate__slow" style={{animationDelay: 700+'ms'}}> El límite está en tu mente. </h2>
          <div className="about">
            <p className="animate__animated animate__fadeInUp animate__slow" style={{animationDelay: 800+'ms'}}>
              {" "}
              Actualmente soy estudiante en la carrera de ingenieria en
              informática <br></br>
              Vivo en Villa Alemana, Chile y me especializo en desarrollar páginas, 
              aplicaciones y sitios web eficientes,modernos e innovadores, basados en los mejores
              estandares de calidad de la industria.
            </p>
            <a href="mailto:johansneirap@gmail.com" className="btn animate__animated animate__fadeInUp animate__slow" style={{animationDelay: 950+'ms'}}>
              Contactame!
            </a>
          </div>
        </div>
      </div>
    )
}
