import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import BasicTextFields from './../../Atoms/InputField/basicInputField'
import BasicLoginButton from './../../Atoms/loginButton/loginButton'
import ErrorMessage from './../../Atoms/ErrorMessage/errorMessage'
import userdata from './../../Constant/user.json'
import './loginPopup.scss'
export default class LoginPopup extends Component {
    constructor(props){
        super(props);
        this.state={
           email:"",
           password:"",
           message:"please enter valid email or password",
           isUser:false
        }
    }
    formData =(data)=>{
		 this.setState({ [data.target.name]: data.target.value, isUser:false });
    }
    loginForm=()=>{
       if(this.state.email===userdata.username && this.state.password===userdata.password){
           this.props.loginFunction()
           this.props.handleModal()
           localStorage.setItem("token", "123xyz")
       }else{
            this.setState({isUser:true})
       }
    }
    render() {
        return (
            <div className="login-wrapper">
                <div className="second-div dice">
                    <div className="username user-input">
                        <BasicTextFields type="text" name="email" label="Username" functionName={(e) => this.formData(e)}/>
                            {this.state.isUser?<ErrorMessage text={this.state.message}/>:""}
                    </div>
                    <div className="password user-input">
                        <BasicTextFields type="password" name="password" label="Password" functionName={(e) => this.formData(e)} />
                    </div>
                    <BasicLoginButton type="button" classNameValue="login-btn" name="login" onClickFuntion={this.loginForm} text="Login" />
                </div>
                   
            </div >
        )
    }
}
