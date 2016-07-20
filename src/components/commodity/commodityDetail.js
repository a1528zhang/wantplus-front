import React, { Component, PropTypes } from 'react'
import { Router, Route, Link } from 'react-router'
import { render } from 'react-dom'

class CommodityDetail extends Component {
    handleClicked(event){
        const {detailData,hiddenCommodityDetail} = this.props;
        console.log(event.target.classList[0]);
        if(event.target.classList[0] == "want-commodity-detail"){
            hiddenCommodityDetail("none",detailData);
        }
    }
    render(){
        const {detailData,displayDetail} = this.props;
        return (
            <div className = "want-commodity-detail" style={{display:displayDetail}} onClick={this.handleClicked.bind(this)}>
                <div className="want-commodity-detail-content" >

                  <div className = "want-commodity-detail-imgbox">

                    <div className = "want-commodity-detail-midimgbox">
                      <img className ="want-commodity-detail-imgsize" src={detailData.commodityImgUrl} />
                    </div>

                    <div className = "want-commodity-detail-btn">
                      <div className = "want-commodity-detail-center">
                        <div className = "want-commodity-detail-like">
                          <img className = "want-commodity-detail-likeimg" src="http://7xwfiz.com1.z0.glb.clouddn.com/like.svg"/>
                          <span className = "want-commodity-detail-likeinner">LIKE</span>
                        </div>

                        <div className = "want-commodity-detail-save">
                          <img className = "want-commodity-detail-saveimg" src="http://7xwfiz.com1.z0.glb.clouddn.com/save.svg"/>
                          <span className = "want-commodity-detail-saveinner">COLLET</span>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className = "want-commodity-detail-innerbox">
                    <div className = "want-commodity-detail-postion">
                      <div className = "want-commodity-detail-innerone">
                        <span className = "want-commodity-name">{detailData.commodityName}</span><br/>
                        <span className = "want-commodity-user">{detailData.commodityUploadUserName}</span>
                      </div>
                      <div className="want-commodity-detail-innertwo">

                      </div>
                      <div></div>
                    </div>
                  </div>


                </div>
            </div>
        )
    }
}

export default CommodityDetail;
