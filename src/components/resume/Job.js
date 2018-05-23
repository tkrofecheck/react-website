import React, { Component } from 'react';
import Company from './Company';
import City from './City';
import Role from './Role';

const Job = (props) => {
    return (
        <div className="resume__job">
            <Company {...props} />
            <City {...props} />
            <Role {...props} />
        </div>
    );
}

export default Job;