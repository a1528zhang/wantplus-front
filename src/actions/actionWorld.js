import {CHANGE_WORLD} from '../constants/constant'

export function changeWorld(){
    $("#text").text("changeWorld");
    return {type:CHANGE_WORLD}
}