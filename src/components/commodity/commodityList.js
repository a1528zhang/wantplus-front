import React, {Component, PropTypes } from 'react';
import { Router, Route, Link } from 'react-router';
import { render } from 'react-dom';
import CommodityBrief from "./commodityBrief"
import CommodityDetail from './commodityDetail'

class CommodityList extends Component {
    componentDidMount(){
        const {getAllCommodity} = this.props;
        getAllCommodity();
    }
    render(){
        const { data,detailData,display,toggleDetailDisplay} = this.props;
        let commodityList = data.map(function(data){
            return (
                <CommodityBrief key={data.commodityId} data ={data} toggle = {toggleDetailDisplay}/>
            )
        })
        return (
            <div>
                {commodityList}
                <CommodityDetail display={display}  toggle ={toggleDetailDisplay} detailData={detailData}/>
            </div>
        )
    }
}

export default CommodityList;