import React from 'react';

const Address = (props) => {
    return (
        <div className="address">
            {props.city}, {' ' + props.state}
        </div>
    );
};

export default Address;