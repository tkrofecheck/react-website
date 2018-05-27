import React from 'react';

const Project = (props) => {
    const { name, images } = props;

    return (
        <div className="project">
            <div className="project__name">
                {name}
            </div>
            <ul className="project__images">
                {images.map((image, index) => {
                    const { blobMimeType, blobUrl } = image.node;
                    
                    return (
                        <li key={index}>
                            <img src={blobUrl} alt={name + ' image-' + index} data-mimetype={blobMimeType} />
                        </li>
                    );
                })}
            </ul>
        </div>
    )
};

export default Project;