import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import BasicTextFields from '../../Atoms/InputField/basicInputField'
import BasicLoginButton from '../../Atoms/loginButton/loginButton'
export default class RegisterPopup extends Component {
    formData=()=>{

    }
    render() {
        return (
            <div className="register-wrapper">

                <div className="second-div dice">
                    <div className="name user-input">
                        <BasicTextFields type="text" name="name" label="Enetr Your Name" functionName={this.formData} />
                    </div>
                    <div className="username user-input">
                        <BasicTextFields type="text" name="email" label="Enetr Username/EmailId" functionName={this.formData} />
                    </div>
                    <div className="password user-input">
                        <BasicTextFields type="password" name="password" label="Enter Password" functionName={(e) => this.formData(e)} />
                    </div>
                    <div className="password user-input">
                        <BasicTextFields type="password" name="cnf-password" label="Confirm Password" functionName={(e) => this.formData(e)} />
                    </div>
                    <BasicLoginButton type="button" classNameValue="login-btn" name="login" onClickFuntion={this.loginForm} text="CONTINUE"/>
                </div>
            </div>
        )
    }
}

