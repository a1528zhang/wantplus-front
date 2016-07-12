import React, { Component, PropTypes } from 'react';
import { Router, Route, Link } from 'react-router';
import { Provider } from 'react-redux';
import Routers from './router';

class Root extends Component {
    render() {
        const {store} = this.props;
        return (
            <Provider store={store}>
                <Routers/>
            </Provider>
        );
    }
}

export default Root;