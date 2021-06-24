import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import './home.css';


const Home = () => {

    return (
        <div>
            <Header />
            <div className="container">
                <h1 className="card-title">Hello! My name is Javier Mondragon</h1>
                <img src='https://i.imgur.com/DOqx4rB.png' className="card-img-top" alt="Javier" />
                <p className="card-text">I am 35 years old and currently live in Tracy, CA. I am currently a full stack web developer student in the UC Berkeley Extension boot camp.
                    I am a very creative person who likes to take on new challenges. </p>
            
                <a href="https://drive.google.com/file/d/1r-77_FgUd3Dygj4wirqXPu4IBR_nODm_/view?usp=sharing" className="nav-link text-light" download><i className="far fa-file"></i></a>
                <a className="nav-link" href="https://www.linkedin.com/in/javier-mondragon-7b471719b/"><i className="fa fa-linkedin"></i></a>
                <a className="nav-link" href="https://github.com/javimarashall"><i className="fa fa-github fa-lg"></i></a>
                <a className="nav-link" href="mailto:jamondragon@ucdavis.edu"><i className="fas fa-envelope-square"></i></a>
            </div>
        </div>
    )
}
export default Home;
