import {DISPLAY_COMMODITY_DETAIL,HIDDEN_COMMODITY_DETAIL} from "../../constants/constant"
import React from 'react'

const initState = {
    displayDetail:"none",
    detailData:[]
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
        default:
            return state
    }
}
