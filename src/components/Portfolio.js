import React from 'react';
import { companyIds } from '../globals/constants';
import Projects from './portfolio/Projects';

const Portfolio = () => {
    return (
        <div className="portfolio">
            {companyIds.map((id, index) => {
                return <Projects key={index} companyId={id} />;
            })}
        </div>
    )
};

export default Portfolio;