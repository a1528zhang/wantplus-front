import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'


class DetailRecommend extends Component {

    recommendCommodityClick(recommendCommodityId){
        const {fromRecommendGetDetailsData} = this.props;
        fromRecommendGetDetailsData(recommendCommodityId);
    };


    render(){
        const { recommendData } = this.props;


        let recommendDataList = recommendData;
        let recommendList = recommendDataList.map(function(data){
            return (
                <div className="want-recommend-preview-outbox" key={data.commodityId} >
                    <div className="want-recommend-mask" onClick={this.recommendCommodityClick.bind(this,data.commodityId)}></div>
                    <div className="want-recommend-preview-box">
                        <div>
                            <img src={data.commodityImg} />
                        </div>
                    </div>
                </div>
            )
        },this);

        return (
            <div className="want-commodity-detail-recommend">
                <div className="want-recommend-inner">
                    <div className="want-recommend-left">
                        小店其他
                    </div>
                    <div className="want-recommend-right">
                        进入小店 >
                    </div>
                </div>
                <div className="want-main-cutline"></div>
                <div className="want-recommend-preview">
                    {recommendList}
                </div>
            </div>
        )
    }
}

export default DetailRecommend;