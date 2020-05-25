import React, { Component } from 'react'
import WebsiteLogo from './../../Atoms/WebsiteLogo/websitelogo'
import BasicSearchBox from './../../Atoms/SearchBoxInput/searchBox'
import Popup from './../PopUp/popup.jsx';

import './header.scss'

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state={
           show:false,
           isLogin:false       
        }
    }
    handleModal = ()=>{
        this.setState({show:!this.state.show})
    }
    loginFunction = () =>{
        this.setState({isLogin:!this.state.isLogin})
    }
    render(){
        return (
            <div className="section-head header-wrapper ">
                <div className="mobile-only">
                    <div className="upper-mobile-header">
                        <div className="logo"><WebsiteLogo /></div>
                        <div className="cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
                        <div className="login"><span className="">{this.state.isLogin?<span onClick={this.loginFunction}>Logout</span>:<span onClick={this.handleModal}>Login</span>}</span></div>
                    </div>
                    <div className="lower-mobile-header">
                        <BasicSearchBox classNameValue="header-search-box" type="text" name="searchbox" placeholder="Search for produts brands, and more" />
                    </div>
                </div>
                <div className="desktop-only">
                    <div className="desktop-hear-container">
                        <div className="logo"><WebsiteLogo /></div>
                        <BasicSearchBox classNameValue="header-search-box" type="text" name="searchbox" placeholder="Search for produts brands, and more" />
                        <div className="login"><span className="basic-button">{this.state.isLogin?<span onClick={this.loginFunction}>Logout</span>:<span onClick={this.handleModal}>Login</span>}</span></div>
                        <font className="arr more" >More &#9663;</font>
                        <font><i className="fa fa-shopping-cart" aria-hidden="true"></i>Cart</font>
                    </div>
                </div>
                <Popup show={this.state.show} handleModal={this.handleModal} loginFunction={this.loginFunction}/>
            </div>
        )
    }
}


