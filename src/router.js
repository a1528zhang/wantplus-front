import React, { Component, PropTypes } from 'react'
import { Router, Route, Link,hashHistory ,IndexRoute } from 'react-router';
import { render } from 'react-dom'
import App from './containers/mainPage'
import CommodityList from './containers/commodity/commodityList'
import ShopList from './containers/shop/shopList'

class Routers extends Component {
    render(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={CommodityList}/>
                    <Route path="/commodityList" component={CommodityList}/>
                    <Route path="/shopList" component={ShopList}/>
                </Route>
            </Router>
        )
    }
}

export default Routers;