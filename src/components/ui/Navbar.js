import React from 'react'

export const Navbar = () => {
    return (
        <div className="navbar sticky-top justify-content-between">
            <a class="navbar-brand bigh1 nav-link" href="#">   JOHANSEN
            </a>
            <ul className="navbar-nav list-group-horizontal">
                <li className="nav-item"><a class="nav-link" href="#">Intro <span class="sr-only">(current)</span></a></li>
                <li className="nav-item"><a class="nav-link" href="#">About <span class="sr-only">(current)</span></a></li>
                <li className="nav-item"><a class="nav-link" href="#">Skills <span class="sr-only">(current)</span></a></li>
                <li className="nav-item"><a class="nav-link" href="#">Works <span class="sr-only">(current)</span></a></li>
            </ul>
        </div>
    )
}
