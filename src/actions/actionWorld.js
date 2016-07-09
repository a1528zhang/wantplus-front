import {CHANGE_WORLD} from '../constants/constant'

//与World组件绑定的action，有另外的绑定文件，不用写在actionIndex里
export function changeWorld(){
    $("#text").text("changeWorld");
    return {type:CHANGE_WORLD}
}