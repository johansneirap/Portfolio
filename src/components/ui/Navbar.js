import React from 'react'

export const Navbar = () => {
    return (
        <div className="navbar sticky-top justify-content-between animate__animated animate__fadeInDown">
            <a className="navbar-brand logo nav-link animate__animated animate__fadeInDown"style={{animationDelay: 100+'ms'}} href="#"> JH </a>
            <ul className="navbar-nav list-group-horizontal">
                <li className="nav-item animate__animated animate__fadeInDown animate__slow" style={{animationDelay: 200+'ms'}} ><a className="nav-link" href="#">Intro <span className="sr-only">(current)</span></a></li>
                <li className="nav-item animate__animated animate__fadeInDown animate__slow" style={{animationDelay: 300+'ms'}}><a className="nav-link" href="#about">About <span className="sr-only">(current)</span></a></li>
                <li className="nav-item animate__animated animate__fadeInDown animate__slow" style={{animationDelay: 400+'ms'}}><a className="nav-link" href="#skills">Skills <span className="sr-only">(current)</span></a></li>
                <li className="nav-item animate__animated animate__fadeInDown animate__slow" style={{animationDelay: 500+'ms'}}><a className="nav-link" href="#works">Works <span className="sr-only">(current)</span></a></li>
            </ul>
        </div>
    )
}
