import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import GetCollege from '../../graphql/getCollege';

import Address from './Address';
import Degree from './Degree';

class Education extends Component {
    static defaultProps = {
        college: {}
    }
    
    constructor(props) {
        super(props);

        this.getDegrees = this.getDegrees.bind(this);
    }

    getDegrees(degrees) {
        if (degrees !== undefined) {
            return degrees.edges.map((degree, index) => {
                const { node } = degree,
                      { degreeFocus, degreeType, gradYear } = node;

                return <Degree key={index} type={degreeType} focus={degreeFocus} year={gradYear} />;
            });
        }
    }

    render() {
        const { college } = this.props,
              { city, collegeName, degrees, state } = college;
        
        return (
            <div>
                <div className="college__name">
                    {collegeName}
                </div>
                <div className="college__address">
                    <Address city={city} state={state} />
                </div>
                <div className="college__degrees">
                    {this.getDegrees(degrees)}
                </div>
            </div>
        );
    }
}

export default compose(
    graphql(GetCollege, {
        options({collegeId}) {
            return {
                variables: {
                    id: collegeId
                }
            };
        },
        props: ({data: { getCollege : college }}) => ({
            college
        })
    })
)(Education);