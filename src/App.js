import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./pages/home";
import Projects from "./pages/projects";
import './app.css';

function App() {
    return (
        <Router basename="/">
            <Switch>

               <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/projects" component={Projects}/>
                <Route component={Projects}/>     
               
            </Switch>
        </Router>
    );
}

export default App;