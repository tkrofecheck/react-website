import React from 'react';

const Role = (props) => {
    const { role } = props,
          { name, duration, items } = role;

    return (
        <div className="resume__job__role">
            <div className="resume__job__role-name">{name}</div>
            <div className="resume__job__role-duration">{duration}</div>
            <ul className="resume__job__role-list">
                {items.map((item, index) => {
                    return <li key={index} >{item}</li>;
                })}
            </ul>
        </div>
    );
};

export default Role;