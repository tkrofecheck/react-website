import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Home from './components/Home';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

const Router = () => (
    <BrowserRouter>
        <div className="router">
            <ul>
                <li>
                    <Link className="router__link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="router__link" to="/resume">Resume</Link>
                </li>
                <li>
                    <Link className="router__link" to="/portfolio">Portfolio</Link>
                </li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/portfolio" component={Portfolio}/>
        </div>
    </BrowserRouter>
);

export default Router;