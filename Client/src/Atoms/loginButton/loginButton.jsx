import React from 'react';

import './loginButton.scss';

const BasicLoginButton = ({ classNameValue, name,text, onClickFuntion, value }) =>
    <div className="login-button">
        <button className={classNameValue}  name={name}  value={value} onClick={onClickFuntion}>{text}</button>
    </div>

export default BasicLoginButton;