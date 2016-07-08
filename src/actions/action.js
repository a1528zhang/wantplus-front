import * as lights from '../constants/constant'

export function goGreen(tet){
    console.log("6");
    console.log(tet);
    console.log("7");
    let result = "666";
    //获取state对象中的initCounter属性值
    //$.ajax({
    //    type:'get',
    //    url:'/wantplus/action/user/userList',
    //    data:{limit:10,
    //        offset:0},
    //    dataType:'json',
    //    async : false,
    //    success:function(data){
    //        result = data.data
    //    }
    //})
    $("#text").css("backgroundColor",'green');
    return {type:lights.CHANGE_GREEN,
        data:result}
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
