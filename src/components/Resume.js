import React, { Component } from 'react';
import Data from '../data/resume.json';
import Section from './resume/Section';

export default class Resume extends Component {
    constructor(props) {
        super(props);

        this.getSections = this.getSections.bind(this);
    }

    getSections() {
        const sections = Data.sections;
        
        return sections.map((section, index) => {
            return <Section key={index} {...section} />;
        });
    }

    render() {
        return (
            <div className="resume">
                {this.getSections()}
            </div>
        )
    }
}