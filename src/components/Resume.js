import React, { Component } from 'react';
import Experience from './resume/Experience';
import Education from './resume/Education';
import { companyIds, collegeId } from '../globals/constants';

export default class Resume extends Component {
    constructor(props) {
        super(props);

        this.getExperience = this.getExperience.bind(this);
        this.getEducation = this.getEducation.bind(this);
    }

    getExperience() {
        return companyIds.map((id, index) => {
            return <Experience key={index} companyId={id} />;
        });
    }

    getEducation() {
        return <Education collegeId={collegeId} />;
    }

    render() {
        return (
            <div className="resume">
                {this.getExperience()}
                {this.getEducation()}
            </div>
        )
    }
}