import {CHANGE_GREEN, CHANGE_BLUE,CHANGE_BLACK,CHANGE_WORLD} from '../constants/constant'
import changeBlack from './reducerBlack'

const initState = {
    initCounter:0,
    color:'blue',
    time:'7', // 持续时间20ms
    data:"",
    text:""
}

export default function changeColor(state= initState,action){
    switch(action.type){
        case CHANGE_GREEN:
            return Object.assign({}, state, {
                initCounter:1,
                color:'green',
                time:'7',
                data:action.data
            })

        case CHANGE_BLUE:
            return Object.assign({}, state, {
                initCounter:2,
                color:'blue',
                time:'7',
                data:"blue"
            })
        case CHANGE_BLACK:
            return Object.assign({}, state, {
                text : changeBlack(state,action)
            })
        case CHANGE_WORLD:
            return  Object.assign({},state,{
                initCounter:4,
                text:"change world!"
            })
        default:
            return state
    }
}