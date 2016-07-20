import React, {Component, PropTypes } from 'react'
import { Router, Route, Link } from 'react-router'
import { render } from 'react-dom'
import CommodityBrief from "./commodityBrief"

class CommodityList extends Component {
    componentDidMount(){
        const {getAllCommodity} = this.props;
        getAllCommodity();
    }
    render(){
        const { data,showCommodityDetail} = this.props;
        let commodityList = data.map(function(data){
            return (
                <CommodityBrief key={data.commodityId}
                                data ={data}
                                showCommodityDetail = {showCommodityDetail}/>
            )
        })
        return (
            <div className="want-commodity-list">
                {commodityList}
                <div className="want-clear-float"></div>
            </div>
        )
    }
}

export default CommodityList;
