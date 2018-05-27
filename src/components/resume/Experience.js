import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import GetCompanyJobs from '../../graphql/getCompanyJobs';

import Address from './Address';
import Job from './Job';

class Experience extends Component {
    static defaultProps = {
        company: {}
    }
    
    constructor(props) {
        super(props);

        this.getJobs = this.getJobs.bind(this);
    }

    getJobs(jobs) {
        if (jobs !== undefined) {
            return jobs.edges.map((job, index) => {
                const { node } = job,
                      { jobTitle, jobRole } = node;

                return <Job key={index} title={jobTitle} role={jobRole} />;
            });
        }
    }

    render() {
        const { company } = this.props,
                { city, companyName, display, jobs, state } = company;
        
        return (
            <div className={display ? '' : 'hidden'}>
                <div className="company__name">
                    {companyName}
                </div>
                <div className="company__address">
                    <Address city={city} state={state} />
                </div>
                <div className="company__jobs">
                    {this.getJobs(jobs)}
                </div>
            </div>
        );
    }
}

export default compose(
    graphql(GetCompanyJobs, {
        options({companyId}) {
            return {
                variables: {
                    id: companyId
                }
            };
        },
        props: ({data: { getCompany : company }}) => ({
            company
        })
    })
)(Experience);