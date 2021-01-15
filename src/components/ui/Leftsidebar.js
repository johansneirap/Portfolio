import React from 'react'

export const Leftsidebar = () => {
    return (
        <div className="col-sidebar col-3 px-1 position-fixed" id="sticky-sidebar">

              <div className="left-sidebar ">
                  <div className="icon-bar make-me-sticky animate__animated animate__fadeInLeft animate__slower">
                <ul className="list-group ">
                    <li className="grow"><a href="https://github.com/johansneirap" target="_hblank" className="github"><i className="fa fa-github"></i></a></li>
                    <li className="grow"><a href="https://www.facebook.com/profile.php?id=100008287421153" target="_hblank" className="facebook"><i className="fa fa-facebook"></i></a></li>
                    <li className="grow"><a href="https://www.instagram.com/joh4nsennn/" target="_hblank" className="instagram"><i className="fa fa-instagram"></i></a></li>
                    <li className="grow"><a href="https://youtube.com" target="_hblank" className="youtube"><i className="fa fa-youtube"></i></a></li>
                    <br></br>
                </ul>
              </div>
              </div>
        </div>
    )
}
