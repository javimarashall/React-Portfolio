import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import { HashRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./pages/home";
import Project from "./pages/projects";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Card from "./components/Project";

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>

               {/* <Route exact path="/" component={Project} /> */}
                <Route exact path="/home" component={Home} />
                <Route exact path="/project" component={Project}/>
                    
               
            </Switch>
        </Router>
    );
}

export default App;