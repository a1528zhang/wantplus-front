import React, {Component, PropTypes } from 'react'
import { Router, Route, Link } from 'react-router'
import { render } from 'react-dom'
import CommodityBrief from "./commodityBrief"
import MainBanner from '../public/mainBanner'
import CommodityDetailMask from '../../containers/commodity/commodityDetailMask'
import { cutUrl } from '../../utils/stringUtils'

class CommodityList extends Component {

    componentDidMount() {

        //从 redux 中获取的方法
        const {getAllCommodity} = this.props;

        //获取商品列表信息,参数是页数
        getAllCommodity(1);

        //获取当前网页地址栏中的地址信息
        let originalUrl = window.location.href;

        //切取 url 中轩然模块的名字
        let getMyRouter = cutUrl(originalUrl);

        //地址栏目中的状态改变
        if (getMyRouter == '') {
            $('#want-nav-homepage-id').attr(
                'class', 'want-nav-click-active'
            );
            $('#want-nav-shoplist-id').attr(
                'class', 'want-nav-click'
            );
        } else {
            console.log('获取地址栏错误');
        }
    }

    render() {
        const { data,showCommodityDetail,addCommodityUrl,showCommodityRecommend} = this.props;

        let commodityList = data.map(function (data) {
            return (
                <CommodityBrief
                    key={data.commodityId}
                    data={data}
                    showCommodityDetail={showCommodityDetail}
                    showCommodityRecommend={showCommodityRecommend}
                    addCommodityUrl={addCommodityUrl}/>
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
