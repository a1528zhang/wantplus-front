import * as lights from '../constants/constant'

export function goBlack(){
    $("#text").css("backgroundColor",'black');
    console.log("goBlack");
    return {type:lights.CHANGE_BLACK}
}
