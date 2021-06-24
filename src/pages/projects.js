import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Project from "../components/Project";
import projectData from "../projects.json";
import Cards from "../components/Project";
import { useState } from 'react';
import './project.css';

const Projects = () => {
    const [data, setData] = useState(projectData);
    const renderProjectCards = () => {
        let result = null;
        if (data) {
            result = data.map((data) => {
                if (data) {
                    return (
                        <Cards
                            key={data.projectName}
                            data={data}
                        />
                    )
                }
                return null;
            });
        }
        return result;
    }
    return (
        <div>
            <Header />
            <div className="container-fluid justify-content-center ml-5">
                <Project />
                {renderProjectCards()}
            </div>
            <Footer />
        </div>
    )
}
export default Projects;
