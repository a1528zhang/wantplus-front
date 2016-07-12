import {DISPLAY_DETAIL} from "../../constants/constant"
import React from 'react';

const initState = {
    display:"none",
    detailData:[]
}

export default function commodityDetail(state = initState,action){
    switch (action.type){
        case DISPLAY_DETAIL:
            return Object.assign({}, state, {
                display:action.display,
                detailData:action.detailData
            })
        default:
            return state
    }
}