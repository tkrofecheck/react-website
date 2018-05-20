import React from 'react';

const Figure = (props) => {
    const { imgSrc, imgAlt } = props;

    return (
        <figure>
            <img src={imgSrc} alt={imgAlt}/>
        </figure>
    )
};

export default Figure;