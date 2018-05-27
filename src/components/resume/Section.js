import React, {Component} from 'react';
import Job from './Job';
import Degree from './Degree';
import Skill from './Skill';
import { compose, graphql } from 'react-apollo';
import GetCompany from '../../graphql/getCompany';
import GetCollege from '../../graphql/getCollege';

class Section extends Component {
    static defaultProps = {
        company: {
            display: false
        },
        college: {},
        skills: []
    }
    
    constructor(props) {
        super(props);

        this.getJobs = this.getJobs.bind(this);
        this.getEducation = this.getEducation.bind(this);
        this.getSkills = this.getSkills.bind(this);
    }

    getJobs() {
        const { company } = this.props;

        if (company !== undefined) {
            console.log('company', company);
        }
    }

    getEducation() {
        const { college } = this.props;

        if (college !== undefined) {
            console.log('college', college);
        }
    }

    getSkills() {
        const { skills } = this.props;

        if (skills !== undefined) {
            console.log('skills', skills);
        }
    }

    render() {
        console.log('this.props', this.props);
        return (
            <section>
                {this.getJobs()}
                {this.getEducation()}
                {this.getSkills()}
            </section>
        )
    }
}

const companyQueryOptions = {
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
};

const collegeQueryOptions = {
    options() {
        return {
            variables: {
                id: "Q29sbGVnZTox"
            }
        };
    },
    props: ({data: { getCollege : college }}) => ({
        college
    })
};

export default compose(
    graphql(GetCompany, companyQueryOptions),
    graphql(GetCollege, collegeQueryOptions)
)(Section);