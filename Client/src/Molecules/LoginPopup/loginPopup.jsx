import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import BasicTextFields from './../../Atoms/InputField/basicInputField'
import BasicLoginButton from './../../Atoms/loginButton/loginButton'
import './loginPopup.scss'
export default class LoginPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            isEmail: true,
            password: "",
            isPassword: true,
            message: ""
        }
    }
    formData = (data) => {
        this.setState({ [data.target.name]: data.target.value });
    }
    loginForm = () => {
        console.log("hello");
    }
    render() {
        return (
            <div className="login-wrapper">
                <div className="second-div dice">
                    <div className="username user-input">
                        <BasicTextFields type="text" name="email" label="Enetr EmailId" functionName={this.formData} />
                    </div>
                    <div className="password user-input">
                        <BasicTextFields type="password" name="password" label="Enter Password" functionName={(e) => this.formData(e)} />
                    </div>
                    <BasicLoginButton type="button" classNameValue="login-btn" name="login" onClickFuntion={this.loginForm} text="Login" />
                </div>
            </div >
        )
    }
}
