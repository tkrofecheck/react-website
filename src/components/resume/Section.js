import React, { Component } from 'react';
import Job from './Job';
import Degree from './Degree';

export default class Section extends Component {
    constructor(props) {
        super(props);

        this.getJobs = this.getJobs.bind(this);
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
    
    render() {
        const { display, name, text, jobs, college, types, sites, title, url } = this.props;
        const classNames = display ? 'hidden' : '';
        
        return (
            <section className={classNames}>
                {name}
                {text}
                {this.getJobs()}
                {this.getEducation()}
            </section>
        )
    }
}