import React from 'react';
import Data from '../data/home.json';
import Figure from './Figure';
import mugshotSquare from '../img/mugshot-square.jpg';

const Home = () => (
    <div className="home">
        <div className="container">
            <Figure className="home__figure" imgSrc={mugshotSquare}/>
            <div className="home__bio">
                {Data.bio}
            </div>
        </div>
    </div>
);

export default Home;