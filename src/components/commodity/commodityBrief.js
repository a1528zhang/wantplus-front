import React, { Component, PropTypes } from 'react'
import { Router, Route, Link } from 'react-router'
import { render } from 'react-dom'
import BriefFooter from '../commodity/briefChirldren/briefFooter'

class CommodityBrief extends Component {

    constructor(props) {
        super(props);
        this.state = {
            maskState: "want-mask",
            starState1: "want-brief-header-left1",
            starState2: "want-brief-header-left2",
            arrowStatus: "want-brief-arrow"
        };
    }

    componentDidMount() {

    }

    handleClicked() {
        const {data,showCommodityDetail,addCommodityUrl} = this.props;
        addCommodityUrl(data.commodityId);
        showCommodityDetail(data.commodityId, "block");
    }

    handleHover(commodityId) {
        this.setState({
            maskState: "want-mask-hover",
            starState1: "want-brief-header-left1-hover",
            starState2: "want-brief-header-left2-hover"
        });

        //载入动画
        $("#want-onmask-commodity-name-id"+commodityId).stop(true).animate({
            opacity: '1',
            paddingTop: '0px'
        }, "100");
        $("#want-onmask-commodity-uploader-id"+commodityId).stop(true).delay(200).animate({
            opacity: '0.3',
            paddingTop: '0px'
        }, "100");
    }

    handleLeave() {
        this.setState({
            maskState: "want-mask",
            starState1: "want-brief-header-left1",
            starState2: "want-brief-header-left2"
        });
        //载入动画
        $(".want-onmask-commodity-name").stop(true).animate({
            opacity: '0',
            paddingTop: '3px'
        });
        $(".want-onmask-commodity-uploader").stop(true).animate({
            opacity: '0',
            paddingTop: '3px'
        });
    }

    arrowHandleHover(commodityId) {
        this.setState({
            arrowStatus: "want-brief-arrow-hover"
        });
        $("#want-brief-price"+commodityId).stop(true).animate({
            paddingRight:'20px'
        },"100");
        $("#want-brief-arrow"+commodityId).stop(true).animate({
            opacity:'1',
            right:'20px'
        },"100");
    }

    arrowHandleLeave(commodityId) {
        this.setState({
            arrowStatus: "want-brief-arrow"
        });
        $("#want-brief-price"+commodityId).stop(true).animate({
            paddingRight:'0px'
        },"100");
        $("#want-brief-arrow"+commodityId).stop(true).animate({
            opacity: '0',
            right:'10px'
        },"100");
    }

    render() {
        const {data}=this.props;

        return (
            <div className="want-commodity-brief">

                <div className="want-commodity-outbox">

                    <a href={data.outerLink}>
                        <div className="want-brief-header-right"
                             onMouseEnter={this.arrowHandleHover.bind(this,data.commodityId)}
                             onMouseLeave={this.arrowHandleLeave.bind(this,data.commodityId)}>
                            <div className="want-brief-header-up">
                                <span id={"want-brief-price"+data.commodityId}
                                    className="want-brief-price">￥{data.commodityPrice}
                                </span>
                                <span id={"want-brief-arrow"+data.commodityId}
                                    className="want-brief-arrow">
                                    <img src="http://7xwfiz.com1.z0.glb.clouddn.com/arrow.svg"/>
                                </span>
                            </div>
                        </div>
                    </a>

                    <div onMouseEnter={this.handleHover.bind(this,data.commodityId)}
                         onMouseLeave={this.handleLeave.bind(this)}>


                        <div className={this.state.starState1}>
                            <img src="http://7xwfiz.com1.z0.glb.clouddn.com/like.svg"/>
                        </div>
                        <div className={this.state.starState2}>
                            <img src="http://7xwfiz.com1.z0.glb.clouddn.com/save.svg"/>
                        </div>

                        <div className="want-commodity-midbox">
                            <img className="want-commodity-img" src={data.commodityImg}/>
                        </div>
                        <div className={this.state.maskState} onClick={this.handleClicked.bind(this)}>
                            <div className="want-mask-inner">
                                <div id={"want-onmask-commodity-name-id"+data.commodityId}
                                     className="want-onmask-commodity-name" >{data.commodityName}</div>
                                <div id={"want-onmask-commodity-uploader-id"+data.commodityId}
                                className="want-onmask-commodity-uploader">{data.commodityUploadUserName}</div>
                            </div>
                        </div>
                        <BriefFooter />
                    </div>

                </div>
            </div>
        )
    }
}

export default CommodityBrief;
