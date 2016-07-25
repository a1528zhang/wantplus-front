import React, { Component, PropTypes } from 'react'
import { Router, Route, Link ,getParams} from 'react-router'
import { render } from 'react-dom'
import CommodityDetail from './detailChirldren/commodityDetail'
import { DETAIL_DATA } from '../../constants/constant'

class CommodityDetailPage extends Component {
    componentDidMount(){
        //根据id发送ajax
        let id =this.props.params.commodityId;

    }
    render(){
        const {commodityId} = this.props;
        let data = DETAIL_DATA;

        return (
            <div className = "want-commodity-detail-page">
                <CommodityDetail detailData={data.data} />
            </div>
        )
    }
}

export default CommodityDetailPage;
