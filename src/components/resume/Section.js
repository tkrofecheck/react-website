import React, { Component } from 'react';
import Job from './Job';

export default class Section extends Component {
    constructor(props) {
        super(props);

        this.getJobs = this.getJobs.bind(this);
    }
    
    getJobs(data) {
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
    
    render() {
        const { display, name, text, jobs, college, types, sites, title, url } = this.props;
        const classNames = display ? 'hidden' : '';
        
        return (
            <section className={classNames}>
                {name}
                {text}
                {this.getJobs()}
            </section>
        )
    }
}