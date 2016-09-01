import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import DetailRecommend from './detailRecommend'


class CommodityDetail extends Component {

    render() {
        /*
         detailData:数据,商品详情,本组件中使用
         recommendData:数据,本商品的相关商品推荐数据,子组件中使用
         fromRecommendGetDetailsData:方法,点击详情页面的商品更新详情页面,子组件使用
         */
        const { detailData,recommendData,fromRecommendGetDetailsData } = this.props;

        //获取推荐人头像列表
        let userHeadImg = detailData.userBrief;
        //返回的头像组件 list
        let userHeadimgList;
        //如果没有推荐人,那么用空组件.如果有推荐人,那么渲染推荐人列表
        if (detailData.userBrief == null || detailData.userBrief.length == 0) {
            userHeadimgList = (
                <div className="want-commodity-detail-userbox">
                </div>
            )
        } else {
            userHeadimgList = userHeadImg.map(function (data) {
                return (
                    <div className="want-commodity-detail-userbox" key={data.userId}>
                        <div></div>
                        <img src={data.headImg}/>
                    </div>
                )
            });
        }

        return (
            <div className="want-commodity-detail-content">
                <div className="want-commodity-detail-header">
                    <div className="want-commodity-detail-imgbox">
                        <div className="want-commodity-detail-midimgbox">
                            <img className="want-commodity-detail-imgsize" src={detailData.commodityImg}/>
                        </div>
                        <div className="want-commodity-detail-btn">
                            <div className="want-commodity-detail-center">
                                <div className="want-commodity-detail-like">
                                    <img className="want-commodity-detail-likeimg"
                                         src="http://7xwfiz.com1.z0.glb.clouddn.com/like.svg"/>
                                    <span className="want-commodity-detail-likeinner">LIKE</span>
                                </div>
                                <div className="want-commodity-detail-save">
                                    <img className="want-commodity-detail-saveimg"
                                         src="http://7xwfiz.com1.z0.glb.clouddn.com/save.svg"/>
                                    <span className="want-commodity-detail-saveinner">COLLET</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="want-commodity-detail-textbox">
                        <div className="want-commodity-detail-postion">
                            <div className="want-commodity-detail-name">{detailData.commodityName}</div>
                            <div className="want-commodity-detail-shop">{detailData.shopName}</div>

                            <a href={detailData.outerLink}>
                                <div className="want-commodity-detail-textbtn">
                                    <span>{detailData.platform} {detailData.commodityPrice} 元</span>
                                </div>
                            </a>

                            <div className="want-commodity-detail-userhead">
                                {userHeadimgList}


                                <div className="want-clear-float"></div>

                                <div className="want-commodity-detail-upload">
                                    {detailData.commodityUploadUserName} <span>上传</span>
                                </div>
                            </div>
                        </div>
                        <div className="want-commodity-detail-sharebox">
                            <div className="want-commodity-detail-shareleft">
                                <img src="http://7xwfiz.com1.z0.glb.clouddn.com/wechartshare.svg"/>
                                <img src="http://7xwfiz.com1.z0.glb.clouddn.com/weiboshare.svg"/>
                                <img src="http://7xwfiz.com1.z0.glb.clouddn.com/facebookshare.svg"/>
                                <img src="http://7xwfiz.com1.z0.glb.clouddn.com/twittershare.svg"/>
                            </div>
                            <div className="want-commodity-detail-mid"></div>
                            <div className="want-commodity-detail-right">
                                <img src="http://7xwfiz.com1.z0.glb.clouddn.com/comment.svg"/>
                                <span>评论这件商品</span>
                            </div>
                        </div>
                    </div>
                    <div className="want-clear-float"></div>
                </div>


                <div className="want-commodity-detail-related">
                    <div className="want-commodity-related">RELATED</div>

                    <DetailRecommend recommendData={recommendData}
                                     fromRecommendGetDetailsData={fromRecommendGetDetailsData}/>

                </div>
                <div className="want-commodity-detail-comment">
                    <div className="want-comment-title">WRITE THE FIRST COMMENT</div>
                    <div className="want-comment-box">
                        <div className="want-comment-inner">
                            <div className="want-comment-headimg">
                                <div></div>
                                <img src="http://7xpmhh.com1.z0.glb.clouddn.com/2.png"/>
                            </div>
                            <div className="want-comment-inputbox">
                                <input className="want-comment-input"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommodityDetail;