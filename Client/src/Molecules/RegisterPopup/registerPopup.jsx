import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import BasicTextFields from '../../Atoms/InputField/basicInputField'
import BasicLoginButton from '../../Atoms/loginButton/loginButton'
import LoginPopup from './../LoginPopup/loginPopup'
import './registerPopup.scss';
export default class RegisterPopup extends Component {
    constructor(props){
        super(props);
        this.state={
           name:"",
           isNameValid:true,
           errorNameMessage:"Please Enter Valid Name",
           email:"",
           isEmailValid:true,
           errorEmailMessage:"Please Enter Valid Email",
           password:"",
           isPasswordValid:true,
           errorPasswordMessage:"Please Enter Strong Password",
           cnfpassword:"",
           isPasswordMatch:true,
           errorPasswordMatch:"Password does not match!!",
           Login:true
        }
    }
    formData=(data)=>{
        if(data.target.name==="name")
            this.setState({isNameValid:true})
         if(data.target.name==="email")
            this.setState({isEmailValid:true})
        if(data.target.name==="password" || data.target.name==="cnfpassword" )
            this.setState({isPasswordValid:true, isPasswordMatch:true})
        this.setState({ [data.target.name]: data.target.value });
    }
    registerForm=(event)=>{
        if(this.state.name.length<5){
            this.setState({isNameValid:false})
            return;
        }
        let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (!pattern.test(this.state.email)) {
            this.setState({isEmailValid:false})
            return;
        }
        let regex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
        if(!regex.test(this.state.password)){
            this.setState({isPasswordValid:false})
            return;
        }
        if(this.state.password!==this.state.cnfpassword){
            this.setState({isPasswordMatch:false})
            return;
        }
        if(this.state.isEmailValid && this.state.isPasswordValid && this.state.isPasswordMatch){
            this.setState({Login:false})
        }
    }
    render() {
        return (
             <div className="register-wrapper">
                 {this.state.Login?
                    <div className="main-input">
                        <div className="name user-input">
                            <BasicTextFields type="text" name="name" label="Name" functionName={this.formData} />
                            {this.state.isNameValid?"":this.state.errorNameMessage}
                        </div>
                        <div className="username user-input">
                            <BasicTextFields type="text" name="email" label="Username" functionName={this.formData} />
                            {this.state.isEmailValid?"":this.state.errorEmailMessage}
                        </div>
                        <div className="password user-input">
                            <BasicTextFields type="password" name="password" label="Password" functionName={(e) => this.formData(e)}/>
                            {this.state.isPasswordValid?"":this.state.errorPasswordMessage}
                        </div>
                        <div className="cnfpassword user-input">
                            <BasicTextFields type="password" name="cnfpassword" label="Confirm Password" functionName={(e) => this.formData(e)}/>
                            {this.state.isPasswordMatch?"":this.state.errorPasswordMatch}
                        </div>
                        <BasicLoginButton type="button" classNameValue="login-btn" name="register" onClickFuntion={this.registerForm} text="CONTINUE"/>
                    </div>:
                    <LoginPopup />}
            </div>
            
        )
    }
}

