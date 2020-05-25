import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './Components/Home/home';
import Cart from './Components/Cart/cart';
const About = ()=> <div>About</div>
const NotFound =() =><div>Bot found</div>
export default class Layout extends Component {
        render() {
        return (
            <div className="layout-router-wrapper">
        <Router>
            <div className="parent-wrapper">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/cart" component={Cart}/>
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    </div>
        )
    }
}

