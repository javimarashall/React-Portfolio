import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Card from "../components/Project";
import { useState } from "react";

const Project = () => {

    return (
        <div>
            <Header />
           
            <div className="container">
                <div className="card">
                    <img src="https://i.imgur.com/vXxKVdX.jpg" className="card-img-top" alt="My Photo" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div className="card-body">
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Project;
