import React, { Component, PropTypes } from 'react'
import { Router, Route, Link } from 'react-router'
import { render } from 'react-dom'
import BriefFooter from '../commodity/briefChirldren/briefFooter'

class CommodityBrief extends Component {

    constructor(props) {
        super(props);
        this.state = {
            maskState:"want-mask",
            starState1:"want-brief-header-left1",
            starState2:"want-brief-header-left2",
            arrowStatus:"want-brief-arrow"
        };
    }

    handleClicked(){
        const {data,showCommodityDetail,addCommodityUrl} = this.props;
        addCommodityUrl(data.commodityId);
        showCommodityDetail(data.commodityId,"block");
    }

    handleHover(){
        this.setState({
            maskState: "want-mask-hover",
            starState1: "want-brief-header-left1-hover",
            starState2:"want-brief-header-left2-hover"
        });
    }

    arrowHandleHover(){
        this.setState({
            arrowStatus:"want-brief-arrow-hover"
        });
    }

    handleLeave(){
        this.setState({
            maskState: "want-mask",
            starState1: "want-brief-header-left1",
            starState2:"want-brief-header-left2"
        });
    }

    arrowHandleLeave(){
        this.setState({
            arrowStatus:"want-brief-arrow"
        });
    }

    render(){
        const {data}=this.props;

        return (
            <div className = "want-commodity-brief"  >

                <div className = "want-commodity-outbox">

                    <a href={data.outerLink}>
                        <div className="want-brief-header-right"
                             onMouseEnter={this.arrowHandleHover.bind(this)}
                             onMouseLeave={this.arrowHandleLeave.bind(this)}>
                            <div className="want-brief-header-up">
                                ￥{data.commodityPrice}
                                <span className={this.state.arrowStatus}>
                                    <img src="http://7xwfiz.com1.z0.glb.clouddn.com/arrow.svg"/>
                                </span>
                            </div>
                        </div>
                    </a>

                    <div onMouseEnter={this.handleHover.bind(this)}
                         onMouseLeave={this.handleLeave.bind(this)}>


                        <div className={this.state.starState1}>
                            <img src="http://7xwfiz.com1.z0.glb.clouddn.com/like.svg"/>
                        </div>
                        <div className={this.state.starState2}>
                            <img src="http://7xwfiz.com1.z0.glb.clouddn.com/save.svg"/>
                        </div>

                        <div className="want-commodity-midbox" >
                            <img className = "want-commodity-img" src={data.commodityImg}/>
                        </div>
                        <div className={this.state.maskState} onClick={this.handleClicked.bind(this)}>
                            <div className="want-mask-inner">
                                {data.commodityName}
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
