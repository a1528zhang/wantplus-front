import React, {Component, PropTypes } from 'react'
import { Router, Route, Link } from 'react-router'
import { render } from 'react-dom'
import CommodityBrief from "./commodityBrief"
import MainBanner from '../public/mainBanner'
import CommodityDetailMask from '../../containers/commodity/commodityDetailMask'
import { cutUrl } from '../../utils/stringUtils'

class CommodityList extends Component {

    componentDidMount(){
        const {getAllCommodity} = this.props;
        getAllCommodity();

        let originalUrl  = window.location.href;
        let getMyRouter = cutUrl(originalUrl);

        if( getMyRouter == ''){
            $('#want-nav-homepage-id').attr(
                'class','want-nav-click-active'
            );
            $('#want-nav-shoplist-id').attr(
                'class','want-nav-click'
            );
        }else {
            console.log('获取地址栏错误');
        }
    }

    render(){
        const { data,showCommodityDetail,addCommodityUrl} = this.props;
        let commodityList = data.map(function(data){
            return (
                <CommodityBrief
                    key={data.commodityId}
                    data ={data}
                    showCommodityDetail = {showCommodityDetail}
                    addCommodityUrl = {addCommodityUrl}/>
            )
        });
        return (
            <div>
                <MainBanner />
                <div className="want-commodity-list">
                    {commodityList}
                    <div className="want-clear-float"></div>
                </div>
                <div className="want-main-load">加载更多</div>
                <CommodityDetailMask/>
            </div>
        )
    }
}

export default CommodityList;
