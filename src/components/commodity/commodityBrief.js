import React, { Component, PropTypes } from 'react'
import { Router, Route, Link } from 'react-router'
import { render } from 'react-dom'
import Mask from '../public/mask'
import BriefHeader from '../commodity/briefChirldren/briefHeader'

class CommodityBrief extends Component {
    handleClicked(event){
        const {data,showCommodityDetail,addCommodityUrl} = this.props;
        addCommodityUrl(data.commodityId);
        showCommodityDetail(data,"block")
    }
    render(){
        const {data}=this.props;
        return (
            <div className = "want-commodity-brief"  onClick={this.handleClicked.bind(this)}>
                <div className = "want-commodity-outbox">
                    <div className="want-commodity-midbox">
                      <img className = "want-commodity-img" src={data.commodityImgUrl}/>
                    </div>
                    <Mask />
                    <BriefHeader header={data}/>
                  {
                    //
                    //
                    //<p>name:{data.commodityName}</p>
                  }
                </div>

            </div>
        )
    }
}

export default CommodityBrief;
