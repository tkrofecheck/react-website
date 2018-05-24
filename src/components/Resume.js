import React, { Component } from 'react';
import Data from '../data/resume.json';
import Section from './resume/Section';

export default class Resume extends Component {
    constructor(props) {
        super(props);

        this.getSections = this.getSections.bind(this);
        
        this.state = {
            displaySections: []
        }
    }

    componentDidMount() {
        this.getSections();
    }

    getSections() {
        const sections = Data.sections,
              displaySections = [];
        
        sections.forEach((section, index) => {
            if (section.display) {
                displaySections.push(<Section key={index} {...section} />);
            }
        });

        this.setState({
            displaySections: displaySections
        });
    }

    render() {
        return (
            <div className="resume">
                {this.state.displaySections}
            </div>
        )
    }
}