import React, { Component, PropTypes } from 'react'
import { Router, Route, Link } from 'react-router'
import { render } from 'react-dom'
import Mask from '../public/mask'
import BriefHeader from '../commodity/briefChirldren/briefHeader'

class CommodityBrief extends Component {
    render(){
        console.log(this.props.toggle);
        const {data,toggle}=this.props;
        return (
            <div className = "want-commodity-brief"  onClick={()=>toggle(data,"block")}>
                <div className = "want-commodity-outbox">
                    <div className="want-commodity-midbox">
                      <img className = "want-commodity-img" src={data.commodityImgUrl}/>
                    </div>
                    <Mask />
                    <BriefHeader />
                  {
                    //
                    //
                    //<p>name:{data.commodityName}</p>
                  }
                </div>

            </div>
        )
    }
}

export default CommodityBrief;
