import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Project from "../components/Project";
import { useState } from "react";

const Home = () => {

    return (
        <div>
            <Header />
            <div class="container">
                <div class="row">
                    <div class="col-sm-8">
                        <Project />
                    </div>
                    
                </div>
                
            </div>
            <Footer />
        </div>
    )
}
export default Home;
