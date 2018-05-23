import React, { Component } from 'react';

const Company = (props) => {
    return (
        <div className="resume__job__company">
            {props.company}
        </div>
    );
};

export default Company;