import React from 'react';
import Data from '../data/data.json';

const Bio = () => (
    <div className="bio">
        <div className="container">
            <div className="bio__header">
                <h1 className="bio__header-name">Tim Krofecheck</h1>
                <div className="bio__header-title">Frontend Web Developer</div>
            </div>
            <div className="bio-text">{Data.bio}</div>
        </div>
    </div>
);

export default Bio;