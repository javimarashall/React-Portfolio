import React from "react";
import { useState } from "react";
import "./Header.css"

const Header = () => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className=""> Hi, my name is Javier Mondragon</h1>
        <br />
        <h3 className=""> I am a full-stack web developer</h3>
        <hr className="my-4" />
        <br />
        <br />
        <br />
        
         
       
      </div>

      <nav className="navbar navbar-expand-lg">

        <div className="navbar-nav float-right">
          <a className="nav-link active" href="/project">Home<span className="sr-only">(current)</span></a>
          <a className="nav-link" href="/home">Project</a>
          <a className="nav-link" href="#">Resume</a>
          <a className="nav-link float-right" href="https://www.linkedin.com/in/javier-mondragon-7b471719b/"><i className="fa fa-linkedin"></i></a>
          <a className="nav-link" href="https://github.com/javimarashall"><i className="fa fa-github fa-lg"></i></a>
          <a className="nav-link" href="mailto:jamondragon@ucdavis.edu"><i className="fas fa-envelope-square"></i></a>


        </div>

      </nav>

    </div>
  )
}
export default Header;
//
//