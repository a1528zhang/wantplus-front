import {CHANGE_BLACK} from '../constants/constant'

import {CHANGE_WORLD} from '../constants/constant'

const initState = {
    initCounter:0,
    color:'blue',
    time:'7', // 持续时间20ms
    data:""
}

export default function addText(state = initState,action){
    switch(action.type){

        case CHANGE_BLACK:
            return {
                text:"to black"
            }

        default:
            return state
    }
}

export default function changeText(state = initState,action){
    switch(action.type){
        case CHANGE_WORLD:
            return {
                text:"change world!"
            }
        default:
            return state
    }
}