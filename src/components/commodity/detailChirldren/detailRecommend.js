import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import {RECOMMEND_DATA} from '../../../constants/constant'


class DetailRecommend extends Component {

    render(){
        let recommendData = RECOMMEND_DATA;
        let recommendList = recommendData.map(function(data){
            return (
                <div className="want-recommend-preview-outbox" key={data.userId}>
                    <div className="want-recommend-mask"></div>
                    <div className="want-recommend-preview-box">
                        <div>
                            <img src={data.commodityImgUrl} />
                        </div>
                    </div>
                </div>
            )
        });

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