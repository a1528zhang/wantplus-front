import {CHANGE_GREEN, CHANGE_BLUE} from '../constants/constant'

const initState = {
    color:'blue',
    time:'7' // 持续时间20ms
}

export default function light(state=initState,action){
    switch(action.type){
        case CHANGE_GREEN:
            return {
                color:'green',
                time:'7'
            }

        case CHANGE_BLUE:
            return {
                color:'blue',
                time:'7'
            }

        default:
            return state
    }
}