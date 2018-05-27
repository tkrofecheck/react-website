import React, { Component } from 'react';
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
        const companyIds = [
            'Q29tcGFueTo2',
            'Q29tcGFueTo1',
            'Q29tcGFueTo0',
            'Q29tcGFueToz',
            'Q29tcGFueToy',
            'Q29tcGFueTox',
        ];

        return companyIds.map((id, index) => {
            return (
                <Section key={index} companyId={id} />
            )
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