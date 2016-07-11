import * as lights from '../constants/constant'

export function goGreen(tet){
    console.log("6");
    console.log(tet);
    console.log("7");
    $("#text").css("backgroundColor",'green');
    return {type:lights.CHANGE_GREEN,
        data:tet}
}
export function goBlue(){
    $("#text").css("backgroundColor",'blue');
    console.log("blue");
    return {type:lights.CHANGE_BLUE}
}

export function lookState(){
    return (dispatch,getState) => {
        //获取state对象中的counter属性值
        const s = getState();
        console.log(s);
        dispatch(goGreen())
    }
}
