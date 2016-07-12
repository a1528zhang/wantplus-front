import React, {Component, PropTypes } from 'react';
import { Router, Route, Link } from 'react-router';
import { render } from 'react-dom';
import ShopBrief from './shopBrief'

class ShopList extends Component {
    componentDidMount(){
        const {getAllShop} = this.props;
        getAllShop();
    }
    render(){
        const {data} = this.props;
        let shops = data.map(function(data){
            return (
                <ShopBrief key={data.shopId} data ={data}/>
            )
        })
        return (
            <div>
                {shops}
            </div>
        )
    }
}

export default ShopList;