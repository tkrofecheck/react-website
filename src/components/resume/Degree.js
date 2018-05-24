import React from 'react';

const Degree = (props) => {
    return (
        <div className="degree">
            <div className="degree-type">
                {props.type}
            </div>
            <div className="degree-focus">
                {props.focus}
            </div>
            <div className="degree-year">
                {props.year}
            </div>
        </div>
    );
}

export default Degree;