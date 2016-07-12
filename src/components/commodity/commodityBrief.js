import React, { Component, PropTypes } from 'react';
import { Router, Route, Link } from 'react-router';
import { render } from 'react-dom';

class CommodityBrief extends Component {
    render(){
        console.log(this.props.toggle);
        const {data,toggle}=this.props;
        return (
            <div className = "commodity-brief"  onClick={()=>toggle(data,"block")}>
                <img src={data.commodityImgUrl}/>
                <p className={data.commodityUploadUserName}>name:{data.commodityName}</p>
            </div>
        )
    }
}

export default CommodityBrief;