import React, { Component, PropTypes } from 'react'
import { Router, Route, Link } from 'react-router'
import { render } from 'react-dom'
import CommodityDetail from './detailChirldren/commodityDetail'

class CommodityDetailMask extends Component {

    componentDidMount(){

    }

    handleClicked(event) {
        const {detailData,hiddenCommodityDetail,originalUrl} = this.props;
        console.log(event.target.classList[0]);
        if (event.target.classList[0] == "want-commodity-detail") {
            hiddenCommodityDetail("none", detailData,originalUrl);
        }
    }

    render() {
        const {detailData,displayDetail} = this.props;

        return (
            <div className="want-commodity-detail" style={{display:displayDetail}}
                 onClick={this.handleClicked.bind(this)}>
                <CommodityDetail detailData={detailData} />

            </div>
        )
    }
}

export default CommodityDetailMask;
