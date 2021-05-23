import React from "react";
import { useState } from "react";

const Header = () => {
    return (
    <div>
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Fluid jumbotron</h1>
                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
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