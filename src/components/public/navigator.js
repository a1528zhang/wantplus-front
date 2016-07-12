import React, { Component, PropTypes } from 'react';
import { Router, Route, Link } from 'react-router';
import { render } from 'react-dom';

class Navigator extends Component {
    render() {
        return (
            <div>
                <Link to="/commodityList"><button className="menuButton">商品列表</button></Link>
                <Link to="/shopList"><button className="menuButton">商店列表</button></Link>
            </div>
        )
    }
}
export default Navigator;
