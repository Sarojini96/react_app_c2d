// src/components/bootstrap-carousel.component.js
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Home';
import aboutPage from'./about';
import workPage from'./work';
import servicePage from'./services';
import storyPage from'./stories';
import careerPage from'./career';

import 'mdbreact/dist/css/mdb.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Components/header/Navbar"
import useSticky from "./Components/hooks/useSticky.jsx"
import history from './Components/header/history';

class App extends React.Component {

    render() {

        return (
            <Router history={history} >
                <div>

                <div className="topnav" >
        <Navbar sticky={useSticky} /></div>
       
                <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/home' component={HomePage} />
              <Route exact path='/about' component={aboutPage} />
              <Route exact path='/works' component={workPage} />
              <Route exact path='/services' component={servicePage} />
              <Route exact path='/stories' component={storyPage} />
              <Route exact path='/careers' component={careerPage} />

          </Switch></div>
                </Router>

        )
    };
}

export default App;
