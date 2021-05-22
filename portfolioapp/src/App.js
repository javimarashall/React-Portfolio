import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import Project from "./pages/projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Project"



function App() {
  return (
    <Router>
      <div>
        <Header />
        
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/project" component={Project} />
       
        <Footer />
      </div>
    </Router>
  );
}

export default App;