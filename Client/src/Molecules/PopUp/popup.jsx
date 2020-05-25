import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'

import LoginPopup from './../LoginPopup/loginPopup'
import RegisterPopup from './../RegisterPopup/registerPopup'
import PopUpRight from './../../Atoms/PopupRightDev/popuRight';

import './popup.scss'

export default class Popup extends Component {
    state = {
        isLogin: true
    }
    toggleLogAndSignup =()=>{
        this.setState({isLogin:!this.state.isLogin})
    }
    render() {
        let isLogin = this.state.isLogin;
        let rightHeader = "";
        let RightText = "";
        let userType = "";

        if (isLogin) {
            rightHeader = "Login";
            RightText = "Get access to your Orders, Wishlist and Recommendations"
            userType = "New to Flipkart? Create an account"
        } else {
            rightHeader = "Looks like you're new here!";
            RightText = "Sign up with your mobile number to get started";
            userType = "Existing User? Log in"
        }
        return (
            <div className="popup-wrapper">
                <Modal className="modal-content" show={this.props.show} onHide={() => { this.props.handleModal() }}>
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body>
                        <PopUpRight rightHeader={rightHeader} RightText={RightText} />
                        {isLogin ?<LoginPopup loginFunction={this.props.loginFunction} handleModal={this.props.handleModal}/>:<RegisterPopup/>}
                        <p onClick={this.toggleLogAndSignup}>{userType}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => { this.props.handleModal() }}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
