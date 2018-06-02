import React from 'react';
import Data from '../data/data.json';

const Bio = () => {
    const { name, title, text } = Data.bio;
    
    return (
        <div className="bio">
            <div className="container">
                <div className="bio__header">
                    <h1 className="bio__header-name">{name}</h1>
                    <div className="bio__header-title">{title}</div>
                </div>
                <div className="bio-text">{text}</div>
            </div>
        </div>
    );
};

export default Bio;