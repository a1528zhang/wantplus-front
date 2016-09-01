import {DISPLAY_COMMODITY_DETAIL,HIDDEN_COMMODITY_DETAIL,RECOMMEND_COMMODITY_DETAIL,SHOW_COMMODITY_RECOMMEND } from "../../constants/constant"
import React from 'react'

//初始状态
const initState = {
    displayDetail:"none",
    detailData:[],
    recommendData:[],
    recommendDataMask:[]
}

export default function commodityDetailMask(state = initState,action){
    switch (action.type){
        //出现商品详情
        case DISPLAY_COMMODITY_DETAIL:
            return Object.assign({}, state, {
                displayDetail:action.displayDetail,
                detailData:action.detailData
            });
        //隐藏商品详情
        case HIDDEN_COMMODITY_DETAIL:
            return Object.assign({}, state, {
                displayDetail:action.displayDetail,
                detailData:action.detailData
            });
        //商品详情推荐
        case RECOMMEND_COMMODITY_DETAIL:
            return Object.assign({},state,{
                recommendData:action.recommendData
            });
        //未知
        case SHOW_COMMODITY_RECOMMEND:
            return Object.assign({},state,{
                recommendDataMask:action.recommendData
            });
        default:
            return state;
    }
}
