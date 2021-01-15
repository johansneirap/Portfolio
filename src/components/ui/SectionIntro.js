import React from 'react'

export const SectionIntro = () => {
    return (
        <div className="row section1" >
        <div className="col">
          <p className="hi">Hola, mi nombre es </p>
          <h1 data-splitting className="bigh1">
            Johans Neira
          </h1>
          <h2 className="big-title"> El límite está en tu mente. </h2>
          <div className="about">
            <p>
              {" "}
              Actualmente soy estudiante en la carrera de ingenieria en
              informática <br></br>
              Vivo en Villa Alemana, Chile y me especializo en desarrollar páginas, 
              aplicaciones y sitios web eficientes,modernos e innovadores, basados en los mejores
              estandares de calidad de la industria.
            </p>
            <a href="mailto:johansneirap@gmail.com" className="btn">
              Contactame!
            </a>
          </div>
        </div>
      </div>
    )
}
