import React, { Component, PropTypes } from 'react'
import { Router, Route, Link } from 'react-router'
import { render } from 'react-dom'
import CommodityDetail from './detailChirldren/commodityDetail'

class CommodityDetailMask extends Component {


    handleClicked(event) {
        /*
         urlDetailData:数据,商品详情,子组件使用
         hiddenCommodityDetail:方法,隐藏遮罩的商品详情,本组件中使用
         originalUrl:原先的地址栏目中的地址
        */
        const {urlDetailData,hiddenCommodityDetail,originalUrl} = this.props;


        const {wantCommodityDetail} = this.refs;
        if (wantCommodityDetail.className == "want-commodity-detail") {
            hiddenCommodityDetail("none", urlDetailData,originalUrl);
        }
    }

    render() {
        const {urlDetailData,recommendData,displayDetail} = this.props;
        return (
            <div className="want-commodity-detail" ref="wantCommodityDetail" style={{display:displayDetail}}
                 onClick={this.handleClicked.bind(this)}>
                <CommodityDetail detailData={urlDetailData} recommendData={recommendData} />
            </div>
        )
    }
}

export default CommodityDetailMask;
