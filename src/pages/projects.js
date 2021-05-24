import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
//import Card from "../components/Project";
//import { useState } from "react";
import "./project.css"

const Project = () => {

    return (
        <div>
            <Header />
           
            <div className="container">
                <div className="card">
                    <img src="https://i.imgur.com/vXxKVdX.jpg" className="card-img-top" alt="My-Photo" />
                    <div className="card-body">
                        <h5 className="card-title">About Me:</h5>
                        <p className="card-text">My name is Javier Mondragon, I am 35 years old and currently live in Tracy, CA. I am currently a full stack web developer student in the UC Berkeley Extension boot camp.
                        I am a very creative person who likes to take on new challenges. </p>
                    </div>
                    <div className="card-body">
                       
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Project;
