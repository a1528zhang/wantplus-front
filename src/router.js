import React, { Component, PropTypes } from 'react'
import { Router, Route, Link,hashHistory } from 'react-router';
import { render } from 'react-dom'
import App from './containers/mainPage'

class Routers extends Component {
    render(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                </Route>
            </Router>
        )
    }
}

export default Routers;