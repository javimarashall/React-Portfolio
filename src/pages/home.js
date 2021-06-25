import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import './home.css';


const Home = () => {

    return (
        <div>
            <Header />
            <div className="container">
                <h2 className="card-title">Hello! I'm</h2>
                <h1 className="title">Javier Mondragon</h1>

                <img src='https://i.imgur.com/vUXR2NJ.png' className="card-top" alt="Javier" />
                <p className="card-text">I am a Full Stack Web Developer looking for my next challenge. I am 35 years old and currently live in Tracy, CA. I enjoy working on on interesting projects and building interactive websites! Please, don't hesitate to checkout my projects or contact me with any questions.</p>
            
                <a href="https://drive.google.com/file/d/1r-77_FgUd3Dygj4wirqXPu4IBR_nODm_/view?usp=sharing" className="nav-link text-light" download><i className="far fa-file"></i></a>
                <a className="nav-link" href="https://www.linkedin.com/in/javier-mondragon-7b471719b/"><i className="fa fa-linkedin"></i></a>
                <a className="nav-link" href="https://github.com/javimarashall"><i className="fa fa-github fa-lg"></i></a>
                <a className="nav-link" href="mailto:jamondragon@ucdavis.edu"><i className="fas fa-envelope-square"></i></a>
            </div>
        </div>
    )
}
export default Home;
