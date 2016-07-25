import React, {Component, PropTypes } from 'react'
import { Router, Route, Link } from 'react-router'
import { render } from 'react-dom'
import {SHOP_LIST} from '../../constants/constant'
import ShopBrief from './shopBrief'

class ShopList extends Component {
    componentDidMount(){
        const {getAllShop} = this.props;
        getAllShop();
    }
    render(){
        let shopListData = SHOP_LIST;
        //const {data} = this.props;

        let shops = shopListData.map(function(data){
            return (
                <ShopBrief key={data.userId} data ={data}/>
            )
        })
        return (
            <div className="want-shop-list">
                {shops}
                <div className="want-clear-float"></div>
            </div>
        )
    }
}

export default ShopList;
