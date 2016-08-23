import React, { Component, PropTypes } from 'react'
import { Router, Route, Link,hashHistory ,IndexRoute } from 'react-router';
import { render } from 'react-dom'
import App from './components/mainPage'
import CommodityList from './containers/commodity/commodityList'
import ShopList from './containers/shop/shopList'
import CommodityDetail from './containers/commodity/commodityDetailPage'
import PersonalPage from './containers/personal/personalPage'
import SignUp from './containers/user/signUp'

class Routers extends Component {
    render(){
        return (
            <Router history={ hashHistory }>
                <Route path="/" component={App}>
                    <IndexRoute component={CommodityList}/>
                    <Route path="/commodityList" component={CommodityList}/>
                    <Route path="/commodityDetail/:commodityId" component={CommodityDetail}/>
                    <Route path="/shopList" component={ShopList}/>
                    <Route path="/personalPage" component={PersonalPage}/>
                    <Route path="/signUp" component={SignUp}/>
                </Route>
            </Router>
        )
    }
}

export default Routers;