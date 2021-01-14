import React from "react";

export const Contentsection = () => {
  return (
    <div className="content-section col offset-1">
        <div className="row">
        <div className="col">
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
      <div className="col-xs-12 col-md-6">
      <div class="frame-img">
          <img src="https://scontent.fscl11-1.fna.fbcdn.net/v/t1.0-9/42423659_2352241581728733_1920977165982105600_o.jpg?_nc_cat=110&ccb=2&_nc_sid=174925&_nc_eui2=AeHXm_SAdf2DWU_d8tqqpV2zPuMIbtQYGaI-4whu1BgZopfmUYilDi5ZayjxvopF5f9upOHrvXXNQaBeAxaUrJDK&_nc_ohc=USOEh02P8CEAX-D2VD_&_nc_ht=scontent.fscl11-1.fna&oh=651dbcf71af9642867a6cd18e1615639&oe=6026BBE3"></img>
      </div>
      </div>
      </div>
    </div>
  );
};
