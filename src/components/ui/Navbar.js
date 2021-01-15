import React from 'react'

export const Navbar = () => {
    return (
        <div className="navbar sticky-top justify-content-between">
            <a class="navbar-brand bigh1 logo nav-link" href="#"> JH </a>
            <ul className="navbar-nav list-group-horizontal">
                <li className="nav-item"><a class="nav-link" href="#section1">Intro <span class="sr-only">(current)</span></a></li>
                <li className="nav-item"><a class="nav-link" href="#section2">About <span class="sr-only">(current)</span></a></li>
                <li className="nav-item"><a class="nav-link" href="#section3">Skills <span class="sr-only">(current)</span></a></li>
                <li className="nav-item"><a class="nav-link" href="#section4">Works <span class="sr-only">(current)</span></a></li>
            </ul>
        </div>
    )
}
