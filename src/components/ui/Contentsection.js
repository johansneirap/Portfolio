import React from "react";

export const Contentsection = () => {
  return (
    <div className="content-section col-10">
      <p className="hi">Hola, mi nombre es </p>
      <h1 data-splitting className="bigh1">Johans Neira</h1>
      <h2> Tu imaginacion es el limite </h2>
      <div className="about">
        <p>
          {" "}
          Actualmente soy estudiante en la carrera de ingenieria en informatica{" "}
          <br></br>
          Vivo en Villa Alemana, Chile y me especializo en desarrollar
          aplicaciones y sitios web modernos, basados en los mejores estandares
          de calidad
        </p>
        <a href="mailto:johansneirap@gmail.com" className="btn">
          Contactame!
        </a>
      </div>
    </div>
  );
};
