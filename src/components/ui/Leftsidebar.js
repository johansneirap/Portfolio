import React from 'react'

export const Leftsidebar = () => {
    return (
        <div className="col-sidebar col-3 px-1 position-fixed" id="sticky-sidebar">

              <div className="left-sidebar ">
                  <div className="icon-bar make-me-sticky">
                <ul className="list-group ">
                    <li className="grow"><a href="https://github.com/johansneirap" target="_hblank" class="github"><i class="fa fa-github"></i></a></li>
                    <li className="grow"><a href="https://www.facebook.com/profile.php?id=100008287421153" target="_hblank" class="facebook"><i class="fa fa-facebook"></i></a></li>
                    <li className="grow"><a href="https://www.instagram.com/joh4nsennn/" target="_hblank" class="instagram"><i class="fa fa-instagram"></i></a></li>
                    <li className="grow"><a href="https://youtube.com" target="_hblank" class="youtube"><i class="fa fa-youtube"></i></a></li>
                    <br></br>
                </ul>
              </div>
              </div>
        </div>
    )
}
