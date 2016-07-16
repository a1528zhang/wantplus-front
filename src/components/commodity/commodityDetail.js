import React, { Component, PropTypes } from 'react'
import { Router, Route, Link } from 'react-router'
import { render } from 'react-dom'

class CommodityDetail extends Component {
    handleClicked(event){
        const {detailData,hiddenCommodityDetail} = this.props;
        console.log(event.target.classList[0]);
        if(event.target.classList[0] == "want-commodity-detail"){
            hiddenCommodityDetail("none",detailData);
        }
    }
    render(){
        const {detailData,displayDetail} = this.props;
        return (
            <div className = "want-commodity-detail" style={{display:displayDetail}} onClick={this.handleClicked.bind(this)}>
                <div className="want-commodity-detail-content" >
                    <p>detail name:{displayDetail}</p>
                    <p>detailData:{detailData.commodityImgUrl}</p>
                </div>
            </div>
        )
    }
}

export default CommodityDetail;
