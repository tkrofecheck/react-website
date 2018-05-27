import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import GetCompanyProjects from '../../graphql/getCompanyProjects';

class Projects extends Component {
    static defaultProps = {
        company: {}
    }
    
    constructor(props) {
        super(props);
    }

    render() {
        const { company } = this.props,
              { companyName, projects } = company;

        return (
            <div className="project">
                <div className="project_company">
                    {companyName}
                </div>
            </div>
        );
    }
}

export default compose(
    graphql(GetCompanyProjects, {
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
)(Projects);