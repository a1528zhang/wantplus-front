import React, {Component, PropTypes } from 'react'
import { Router, Route, Link } from 'react-router'
import { render } from 'react-dom'
import {SHOP_LIST} from '../../constants/constant'
import ShopBrief from './shopBrief'
import { cutUrl } from '../../utils/stringUtils'

class ShopList extends Component {

    componentWillMount(){

    }

    componentDidMount(){
        const {getAllShop} = this.props;
        getAllShop();


        //导航栏变色
        let originalUrl  = window.location.href;
        let getMyRouter = cutUrl(originalUrl);

        if( getMyRouter == 'ShopList'){
            $('#want-nav-shoplist-id').attr(
                'class','want-nav-click-active'
            );
            $('#want-nav-homepage-id').attr(
                'class','want-nav-click'
            );
        }else {
            console.log('获取地址栏错误');
        }

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
