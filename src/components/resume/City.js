import React, { Component } from 'react';

const City = (props) => {
    return (
        <div className="resume__job__city">
            {props.city}
        </div>
    );
};

export default City;