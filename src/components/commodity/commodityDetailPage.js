import React, { Component, PropTypes } from 'react'
import { Router, Route, Link ,getParams} from 'react-router'
import { render } from 'react-dom'
import CommodityDetail from './detailChirldren/commodityDetail'

class CommodityDetailPage extends Component {


    componentDidMount(){

        //获取地址 router 参数中的id
        let commodityDetailId =this.props.params.commodityId;

        const { getCommodityDetailData ,getCommodityDetailRecommendData} = this.props;
        getCommodityDetailData(commodityDetailId);
        getCommodityDetailRecommendData(commodityDetailId);

    }
    render(){
        const { urlDetailData, recommendData,fromRecommendGetDetailsData} = this.props;
        return (
            <div className = "want-commodity-detail-page">
                <CommodityDetail
                    detailData={urlDetailData}
                    recommendData={recommendData}
                    fromRecommendGetDetailsData={fromRecommendGetDetailsData}/>
            </div>
        )
    }
}

export default CommodityDetailPage;
