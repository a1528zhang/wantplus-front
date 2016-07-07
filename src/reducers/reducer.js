import {CHANGE_GREEN, CHANGE_BLUE,CHANGE_BLACK} from '../constants/constant'

const initState = {
    initCounter:0,
    color:'blue',
    time:'7', // 持续时间20ms
    data:""
}

export default function changeColor(state=initState,action){
    switch(action.type){
        case CHANGE_GREEN:
            return {
                initCounter:1,
                color:'green',
                time:'7',
                data:action.data
            }

        case CHANGE_BLUE:
            return {
                initCounter:2,
                color:'blue',
                time:'7'
            }
        case CHANGE_BLACK:
            return {
                initCounter:3,
                color:'black',
                time:'7',
                data:"black"
            }

        default:
            return state
    }
}