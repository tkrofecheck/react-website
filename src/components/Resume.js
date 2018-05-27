import React, { Component } from 'react';
import Experience from './resume/Experience';
import Education from './resume/Education';

export default class Resume extends Component {
    constructor(props) {
        super(props);

        this.getExperience = this.getExperience.bind(this);
        this.getEducation = this.getEducation.bind(this);
    }

    getExperience() {
        const companyIds = [
            'Q29tcGFueTo2',
            'Q29tcGFueTo1',
            'Q29tcGFueTo0',
            'Q29tcGFueToz',
            'Q29tcGFueToy',
            'Q29tcGFueTox',
        ];

        return companyIds.map((id, index) => {
            return <Experience key={index} name="experience" companyId={id} />;
        });
    }

    getEducation() {
        const id = "Q29sbGVnZTox";

        return <Education collegeId={id} />;
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