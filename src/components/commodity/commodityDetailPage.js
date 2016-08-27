import React, { Component, PropTypes } from 'react'
import { Router, Route, Link ,getParams} from 'react-router'
import { render } from 'react-dom'
import CommodityDetail from './detailChirldren/commodityDetail'

class CommodityDetailPage extends Component {


    componentDidMount(){

        //根据id发送ajax
        let commodityDetailId =this.props.params.commodityId;

        const { getCommodityDetailData ,getCommodityDetailRecommendData} = this.props;
        getCommodityDetailData(commodityDetailId);
        getCommodityDetailRecommendData(commodityDetailId);

    }
    render(){
        const { urlDetailData, recommendData} = this.props;
        return (
            <div className = "want-commodity-detail-page">
                <CommodityDetail detailData={urlDetailData} recommendData={recommendData} />
            </div>
        )
    }
}

export default CommodityDetailPage;
