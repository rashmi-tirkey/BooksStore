import React, { Component } from 'react'
import {Button, Modal} from 'react-bootstrap'
import BasicTextFields from './../../Atoms/InputField/basicInputField'
import BasicLoginButton from './../../Atoms/loginButton/loginButton'
import './loginPopup.scss'
export default class LoginPopup extends Component {
    constructor(props){
        super(props);
        this.state={
            email:"",
            isEmail:true,
            password: "",
            isPassword:true,
            message:""
        }
    }
    formData =(data)=>{
        this.setState({ [data.target.name]: data.target.value });
   }
   loginForm=()=>{
    console.log("hello");
}
    render() {
        console.log(this.state)
        return (
            <div className="login-wrapper">
            <Modal  className="modal-content" show={this.props.show} onHide={()=>{this.props.handleModal()}}>
                <Modal.Header closeButton></Modal.Header>
                    <Modal.Body>
                        <div className="heading-wrapper">
                            <div className="first-div dice" >
                                <h2>Login</h2>
                                <span>
                                    <p>Get access to your <br/>
                                    orders, Wishlist and <br/>
                                    Recommendations</p>
                                </span>
                            </div>
                            <div className="second-div dice">
                                <div className="username user-input">
                                <BasicTextFields type="text" name="email" label="Enetr EmailId" functionName={this.formData}/>
                                </div>
                                <div className="password user-input">
                                <BasicTextFields type="password" name="password" label="Enter Password" functionName={(e) => this.formData(e)}/>
                                </div>
                                <BasicLoginButton type="button" classNameValue="login-btn" name="login" onClickFuntion={this.loginForm} text="Login"/>
                                <a href="">New to Flipkart? Create an account</a> 
                            </div> 
                        </div>
                    </Modal.Body>
                        <Modal.Footer>   
                         <Button onClick={()=>{this.props.handleModal()}}>Close</Button>
                        </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
