import {getCookie} from "../../utils/stringUtils"

export function readUserInfo(){
    let username = getCookie("username");
    if (username != '' && username != undefined){
        $(".want-nav-un-login-block").css("display","none");
        $(".want-nav-has-login-block").css("display","block");
        $(".want-nav-head-icon").attr("src", getCookie("headImg"));
    }else{
        $(".want-nav-un-login-block").css("display","block");
        $(".want-nav-has-login-block").css("display","none");
    }
    return {
        type:""
    };
}