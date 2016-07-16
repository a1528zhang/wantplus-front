import React, { Component, PropTypes } from 'react'
import { Router, Route, Link } from 'react-router'
import { render } from 'react-dom'

class CommodityDetail extends Component {
    render(){
        const {detailData,display,toggle} = this.props;
        return (
            <div className = "want-commodity-detail" style={{display:display}} onClick={()=>toggle("","none")}>
                <p>detail name:{display}</p>
                <p>detailData:{detailData.commodityId}</p>
            </div>
        )
    }
}

export default CommodityDetail;
