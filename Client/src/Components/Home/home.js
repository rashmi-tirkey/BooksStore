import React, { Component } from 'react'

import Header from './../../Molecules/Header/header'

import './home.scss';

export default class Home extends Component {
    render() {
        return (
            <div className="home-wrapper">
                <div className="header-wrapper">
                    <Header/>
                </div>
            </div>
        )
    }
}
