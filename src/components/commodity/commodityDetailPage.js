import React, { Component, PropTypes } from 'react'
import { Router, Route, Link ,getParams} from 'react-router'
import { render } from 'react-dom'


class CommodityDetailPage extends Component {
    componentDidMount(){
        //根据id发送ajax
        let id =this.props.params.commodityId;
    }
    render(){
        const {commodityId} = this.props;
        return (
            <div className = "want-commodity-detail-page">
                <p>商品ID:{commodityId}</p>
                <p>url上的ID:{this.props.params.commodityId}</p>
            </div>
        )
    }
}

export default CommodityDetailPage;
