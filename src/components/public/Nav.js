import React, { Component, PropTypes } from 'react';
import { Router, Route, Link } from 'react-router';
import { render } from 'react-dom';

class Nav extends Component {
    render() {
        const { changeWorld} = this.props;
        return (
            <button onClick={changeWorld}>change world!</button>
        )
    }
}
export default Nav;
