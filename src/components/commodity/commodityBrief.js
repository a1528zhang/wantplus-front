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
            starState2:"want-brief-header-left2"
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
            starState2:"want-brief-header-left2-hover",
            commodityNameState:""
        });
    }

    handleLeave(){
        this.setState({
            maskState: "want-mask",
            starState1: "want-brief-header-left1",
            starState2:"want-brief-header-left2"
        });
    }

    render(){
        const {data}=this.props;

        var commodityMask = this.state.maskState;
        var commodityShow1 = this.state.starState1;
        var commodityShow2 = this.state.starState2;

        return (
            <div className = "want-commodity-brief"  >

                <div className = "want-commodity-outbox">

                    <div className="want-brief-header-right"  >
                        <div className="want-brief-header-up">
                            ￥{data.commodityPrice}
                        </div>
                    </div>

                    <div onMouseEnter={this.handleHover.bind(this)}
                         onMouseLeave={this.handleLeave.bind(this)}>


                        <div className={commodityShow1}>
                            <img src="http://7xwfiz.com1.z0.glb.clouddn.com/like.svg"/>
                        </div>
                        <div className={commodityShow2}>
                            <img src="http://7xwfiz.com1.z0.glb.clouddn.com/save.svg"/>
                        </div>


                        <div className="want-commodity-midbox" >
                            <img className = "want-commodity-img" src={data.commodityImgUrl}/>
                        </div>
                        <div className={commodityMask} onClick={this.handleClicked.bind(this)}>
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
