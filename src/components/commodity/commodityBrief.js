import React, { Component, PropTypes } from 'react'
import { Router, Route, Link } from 'react-router'
import { render } from 'react-dom'
import BriefFooter from '../commodity/briefChirldren/briefFooter'

class CommodityBrief extends Component {

    //点击遮罩
    handleClicked() {
        const {data,showCommodityDetail,addCommodityUrl,showCommodityRecommend} = this.props;
        //在地址栏中加入商品详情的地址
        addCommodityUrl(data.commodityId);
        //显示遮罩和被点击商品的详情
        showCommodityDetail(data.commodityId, "block");
        //显示被点击商品的相关推荐商品
        showCommodityRecommend(data.commodityId);
    }

    handleHover() {
        const { briefHeaderLeft1, briefHeaderLeft2, wantMask, onmaskCommodityName, onmaskCommodityUploader } = this.refs;
        //点赞按钮 hover 状态
        briefHeaderLeft1.className = "want-brief-header-left1-hover";
        //收藏按钮 hover 状态
        briefHeaderLeft2.className = "want-brief-header-left2-hover";
        //遮罩 hover 状态
        wantMask.className = "want-mask-hover";
        //商品名称 hover 状态下显示
        onmaskCommodityName.className = "want-onmask-commodity-name-hover";
        //上传人名称 hover 状态下显示
        onmaskCommodityUploader.className = "want-onmask-commodity-uploader-hover";
    }

    handleLeave() {
        const {briefHeaderLeft1,briefHeaderLeft2,wantMask,onmaskCommodityName, onmaskCommodityUploader} = this.refs;
        //名字一样的情况同上,消除 hover 状态
        briefHeaderLeft1.className = "want-brief-header-left1";
        briefHeaderLeft2.className = "want-brief-header-left2";
        wantMask.className = "want-mask";
        onmaskCommodityName.className = "want-onmask-commodity-name";
        onmaskCommodityUploader.className = "want-onmask-commodity-uploader";
    }

    arrowHandleHover() {
        const { wantBriefPrice , wantBriefArrow} = this.refs;
        //价格栏目 hover
        wantBriefPrice.className = "want-brief-price-hover";
        wantBriefArrow.className = "want-brief-arrow-hover";
    }

    arrowHandleLeave() {
        const { wantBriefPrice , wantBriefArrow} = this.refs;
        //价格栏目消除 hover
        wantBriefPrice.className = "want-brief-price";
        wantBriefArrow.className = "want-brief-arrow";

    }

    likeCommodity() {

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
                                <span className="want-brief-price" ref="wantBriefPrice">￥{data.commodityPrice}</span>
                                <span className="want-brief-arrow" ref="wantBriefArrow">
                                    <img src="http://7xwfiz.com1.z0.glb.clouddn.com/arrow.svg"/>
                                </span>
                            </div>
                        </div>
                    </a>
                    <div onMouseEnter={this.handleHover.bind(this,data.commodityId)}
                         onMouseLeave={this.handleLeave.bind(this)}>
                        <div className="want-brief-header-left1" ref="briefHeaderLeft1"
                             onClick={this.likeCommodity.bind(this)}>
                            <img src="http://7xwfiz.com1.z0.glb.clouddn.com/like.svg"/>
                        </div>
                        <div className="want-brief-header-left2" ref="briefHeaderLeft2">
                            <img src="http://7xwfiz.com1.z0.glb.clouddn.com/save.svg"/>
                        </div>

                        <div className="want-commodity-midbox">
                            <img className="want-commodity-img" src={data.commodityImg}/>
                        </div>
                        <div className="want-mask" ref="wantMask" onClick={this.handleClicked.bind(this)}>
                            <div className="want-mask-inner">
                                <div className="want-onmask-commodity-name"
                                     ref="onmaskCommodityName">{data.commodityName}</div>
                                <div className="want-onmask-commodity-uploader"
                                     ref="onmaskCommodityUploader">{data.commodityUploadUserName}</div>
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
