import React from "react";
import { useState } from "react";
import "./Header.css"

const Header = () => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className=""> Hi, my name is Javier Mondragon</h1>
        <h3 className=""> I am a full-stack web developer</h3>
        <hr className="my-4" />
        <br />
        <br />
        <br />
        </div>
        <nav className="navbar navbar-expand-lg">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" href="/project">Home<span className="sr-only">(current)</span></a>
              <a className="nav-link" href="/home">project</a>
              <a className="nav-link" href="#">Resume</a>

            </div>
          </div>
        </nav>
     
    </div>
  )
}
export default Header;
//
//