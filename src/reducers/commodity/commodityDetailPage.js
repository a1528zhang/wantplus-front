import {ADD_COMMODITY_URL} from "../../constants/constant"
import React from 'react'

const initState = {
    commodityId:0,
    originalUrl:""
}

export default function commodityDetailPage(state = initState,action){
    switch (action.type){
        case ADD_COMMODITY_URL:
            return Object.assign({}, state, {
                commodityId:action.commodityId,
                originalUrl:action.originalUrl
            })
        default:
            return state
    }
}
