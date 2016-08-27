import {DISPLAY_COMMODITY_DETAIL,HIDDEN_COMMODITY_DETAIL,RECOMMEND_COMMODITY_DETAIL,SHOW_COMMODITY_RECOMMEND } from "../../constants/constant"
import React from 'react'

const initState = {
    displayDetail:"none",
    detailData:[],
    recommendData:[],
    recommendDataMask:[]
}

export default function commodityDetail(state = initState,action){
    switch (action.type){
        case DISPLAY_COMMODITY_DETAIL:
            return Object.assign({}, state, {
                displayDetail:action.displayDetail,
                detailData:action.detailData
            })
        case HIDDEN_COMMODITY_DETAIL:
            return Object.assign({}, state, {
                displayDetail:action.displayDetail,
                detailData:action.detailData
            })
        case RECOMMEND_COMMODITY_DETAIL:
            return Object.assign({},state,{
                recommendData:action.recommendData
            })
        case SHOW_COMMODITY_RECOMMEND:
            return Object.assign({},state,{
                recommendDataMask:action.recommendData
            })
        default:
            return state
    }
}
