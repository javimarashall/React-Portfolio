import React from "react";
import "./Header.css"
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div>
      {/* <div className="jumbotron">
        <h1 className=""> Hi, my name is Javier Mondragon</h1>
        <br />
        <h3 className=""> I am a full-stack web developer</h3>
        <hr className="my-4" />
        <br />
        <br />
        <br />       
      </div> */}
      <nav className="navbar navbar-expand-lg">

        <div className="navbar-nav">
        <Link
              to="/"
              className={
                window.location.pathname === "/home" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>

            <Link
              to="/projects"
              className={
                window.location.pathname === "/projects" || window.location.pathname === "/projects"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Projects
            </Link>
        </div>

      </nav>

    </div>
  )
}
export default Header;
//
//