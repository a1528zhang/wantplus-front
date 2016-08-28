import React, { Component, PropTypes } from 'react'
import { Router, Route, Link } from 'react-router'
import { render } from 'react-dom'
import CommodityDetail from './detailChirldren/commodityDetail'

class CommodityDetailMask extends Component {


    handleClicked(event) {
        const {urlDetailData,hiddenCommodityDetail,originalUrl} = this.props;

        if (event.target.classList[0] == "want-commodity-detail") {
            hiddenCommodityDetail("none", urlDetailData,originalUrl);
        }
    }

    render() {
        const {urlDetailData,recommendData,displayDetail} = this.props;

        console.log(recommendData+"beings");

        return (
            <div className="want-commodity-detail" style={{display:displayDetail}}
                 onClick={this.handleClicked.bind(this)}>
                <CommodityDetail detailData={urlDetailData} recommendData={recommendData} />
            </div>
        )
    }
}

export default CommodityDetailMask;
