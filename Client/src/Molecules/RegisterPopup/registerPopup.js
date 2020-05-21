import React, { Component } from 'react'
import {Button, Modal} from 'react-bootstrap'
import BasicTextFields from './../../Atoms/InputField/basicInputField'
import BasicLoginButton from './../../Atoms/loginButton/loginButton'
export default class RegisterPopup extends Component {
    render() {
        return (
            <div className="login-wrapper">
            <Modal  className="modal-content" show={this.props.show} onHide={()=>{this.props.registerModal()}}>
                <Modal.Header closeButton></Modal.Header>
                    <Modal.Body>
                        <div className="heading-wrapper">
                            <div className="first-div dice" >
                                <h2>Signup</h2>
                                <span><p className="message">Looks like you're<br/>
                                        new here!
                                        </p>
                                        <p>Sign up with your mobile<br/>
                                            number to get started<br/>
                                        </p>
                                </span>
                            </div>
                            <div className="second-div dice">
                                <div className="username user-input">
                                <BasicTextFields type="text" name="name" label="Enetr Your Name" functionName={this.formData}/>
                                </div>
                                <div className="username user-input">
                                <BasicTextFields type="text" name="email" label="Enetr Username/EmailId" functionName={this.formData}/>
                                </div>
                                <div className="password user-input">
                                <BasicTextFields type="password" name="password" label="Enter Password" functionName={(e) => this.formData(e)}/>
                                </div>
                                <div className="password user-input">
                                <BasicTextFields type="password" name="cnf-password" label="Confirm Password" functionName={(e) => this.formData(e)}/>
                                </div>
                                <p>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                                <BasicLoginButton type="button" classNameValue="login-btn" name="login" onClickFuntion={this.loginForm} text="CONTINUE"/>
                            </div> 
                        </div>
                    </Modal.Body>
                        <Modal.Footer>   
                         <Button onClick={()=>{this.props.registerModal()}}>Close</Button>
                        </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

