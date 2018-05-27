import React from 'react';

const Job = (props) => {
    const { title, role } = props;

    return (
        <div className="job">
            <div className="job__title">
                {title}
            </div>
            <ul className="job__role">
                {role.map((item, index) => {
                    return <li key={index} >{item}</li>;
                })}
            </ul>
        </div>
    );
}

export default Job;