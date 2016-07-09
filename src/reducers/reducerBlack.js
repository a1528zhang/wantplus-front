import {CHANGE_GREEN, CHANGE_BLUE,CHANGE_BLACK,CHANGE_WORLD} from '../constants/constant'

export default function changeBlack(state=[],action){
    switch(action.type){
        case CHANGE_BLACK:
            return action.text;
        default:
            return state
    }
}