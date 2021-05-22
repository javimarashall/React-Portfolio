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
                    <Project />
                </div>
            <Footer />
        </div>
    )
}
export default Home;
