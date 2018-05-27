import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import GetCompanyProjects from '../../graphql/getCompanyProjects';
import Project from './Project';

class Projects extends Component {
    static defaultProps = {
        company: {}
    }

    constructor(props) {
        super(props);

        this.getProjects = this.getProjects.bind(this);
    }

    getProjects(projects) {
        if (projects !== undefined && projects.edges !== undefined && projects.edges.length) {
            const { projectName } = projects.aggregations.max,
                  { images } = projects.edges[0].node;
            
            if (images.edges.length) {
                return <Project name={projectName} images={images.edges} />;
            }
        }
    }

    render() {
        const { company } = this.props,
              { companyName, projects } = company;

        return (
            <div className="project">
                <div className="project__company">
                    {companyName}
                </div>
                <hr />
                <ul className="project__images">
                    {this.getProjects(projects)}
                </ul>
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