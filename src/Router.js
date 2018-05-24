import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Home from './components/Home';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Data from './data/router.json';

const Router = () => (
    <BrowserRouter>
        <div className="router">
            <ul>
                {Data.links.map((link, index) => {
                    const { router_link, icon, url, name } = link;

                    return (
                        <li key={index} data-icon={icon}>
                            {(() => {
                                if (router_link) {
                                    return <Link className="router__link" to={url}>{name}</Link>;
                                } else {
                                    return <a href={url}>{name}</a>;
                                }
                            })()}
                        </li>
                    )
                })}
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/portfolio" component={Portfolio}/>
        </div>
    </BrowserRouter>
);

export default Router;