import {ADD_COMMODITY_URL,GET_COMMODITY_DETAIL_DATA,GET_COMMODITY_DETAIL_RECOMMEND_DATA} from "../../constants/constant"
import React from 'react'

const initState = {
    commodityId:0,
    originalUrl:"",
    data:[],
    recommendData:[]
};

export default function commodityDetailPage(state = initState,action){
    switch (action.type){
        //加商品地址
        case ADD_COMMODITY_URL:
            return Object.assign({}, state, {
                commodityId:action.commodityId,
                originalUrl:action.originalUrl
            });
        //获取商品详情数据
        case GET_COMMODITY_DETAIL_DATA:
            return Object.assign({}, state, {
                data:action.data
            });
        //获取推荐数据
        case GET_COMMODITY_DETAIL_RECOMMEND_DATA:
            return Object.assign({}, state, {
                recommendData:action.recommendData
            });
        default:
            return state;
    }
}
