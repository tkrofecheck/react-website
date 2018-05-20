import React from 'react';

const Figure = (props) => {
    const { className, imgSrc, imgAlt } = props;

    return (
        <figure className={className}>
            <img src={imgSrc} alt={imgAlt}/>
        </figure>
    )
};

export default Figure;