import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Bio from './components/Bio';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
//import Figure from './components/Figure';
import Data from './data/data.json';

const Router = () => (
    <BrowserRouter>
        <div className="router">
            <ul>
                {Data.router.links.map((link, index) => {
                    const { router_link, className, icon, url, name } = link;

                    return (
                        <li key={index} data-icon={icon}>
                            {(() => {
                                if (router_link) {
                                    return (
                                        <Link className={"router__link" + className} to={url}>
                                            {name}
                                        </Link>
                                    );
                                } else {
                                    return <a href={url}>{name}</a>;
                                }
                            })()}
                        </li>
                    )
                })}
            </ul>
            <hr/>

            <Route path="/" component={Bio}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/portfolio" component={Portfolio}/>
        </div>
    </BrowserRouter>
);

export default Router;