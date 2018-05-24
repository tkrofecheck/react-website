import React, { Component } from 'react';
import Job from './Job';
import Degree from './Degree';
import Skill from './Skill';

export default class Section extends Component {
    constructor(props) {
        super(props);

        this.getJobs = this.getJobs.bind(this);
        this.getEducation = this.getEducation.bind(this);
        this.getSkills = this.getSkills.bind(this);
    }
    
    getJobs() {
        const { jobs } = this.props;

        if (jobs !== undefined) {
            return(
                <div className="resume__jobs">
                    {jobs.map((job, index) => {
                        return <Job key={index} {...job} />;
                    })}
                </div>
            )
        }
    }

    getEducation() {
        const { college } = this.props;

        if (college !== undefined) {
            const { name, city, degrees } = college;

            return(
                <div className="resume_education">
                    <div className="resume_education-school">
                        <div className="name">
                            {name}
                        </div>
                        <div className="city">
                            {city}
                        </div>
                        <div className="degree">
                            {degrees.map((degree, index) => {
                                return <Degree key={index} {...degree} />;
                            })}
                        </div>
                    </div>
                </div>
            )
        }
    }

    getSkills() {
        const { skills } = this.props;

        if (skills !== undefined) {
            return(
                <ul className="resume__skills">
                    {skills.map((skill, index) => {
                        return <Skill key={index} value={skill} />;
                    })}
                </ul>
            )
        }
    }
    
    render() {
        const { display, name, text } = this.props;
        
        return (
            <section className={display ? '' : 'hidden'}>
                {name}
                {text}
                {this.getJobs()}
                {this.getEducation()}
                {this.getSkills()}
            </section>
        )
    }
}