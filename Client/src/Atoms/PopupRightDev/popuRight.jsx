import React from 'react';
import './popupRight.scss';

const PopUpRight = ({ rightHeader, RightText }) =>
    <div className="right-wripper" >
        <h2>{rightHeader}</h2>
        <p>
            {RightText}
        </p>

    </div>

export default PopUpRight;