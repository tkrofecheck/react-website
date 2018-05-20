import React from 'react';
import Data from '../data/home.json';
import Figure from './Figure';
import mugshot from '../img/mugshot.jpg';

const Home = () => (
    <div className="home">
        <div className="container">
            <Figure imgSrc={mugshot} />
            <div className="home__bio">
                {Data.bio}
            </div>
        </div>
    </div>
);

export default Home;