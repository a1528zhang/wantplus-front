import signIn from '../components/user/signIn'

export function cutUrl(originalUrl){
    let start = originalUrl.indexOf("/#/")+3;
    let end = originalUrl.indexOf("?");
    let startsententce = originalUrl.substring(start,end);
    return startsententce;
}

export function setCookie(name,value){
    let expdate = new Date();
    expdate.setTime(expdate.getTime() + 30 * 60 * 1000);
    document.cookie = name+"="+value+";expires="+expdate.toGMTString()+";path=/";
    return expdate.toGMTString();
}

export function getCookie(c_name)
{
    if (document.cookie.length>0)
    {
        let c_start=document.cookie.indexOf(c_name + "=")
        let c_end= c_start;
        if (c_start!=-1)
        {
            c_start=c_start + c_name.length+1
            c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
            return decodeURI(document.cookie.substring(c_start,c_end))
        }
    }
    return ""
}

export function logout(){
    $.ajax({
        type:"POST",
        url:'http://localhost:8080/wantplus/action/user/logout',
        dataType: "json",//返回数据的类型
        async: false,
        success: function (data) {
            $(".want-nav-un-login-block").css("display","block");
            $(".want-nav-has-login-block").css("display","none");
        },
        error:function(xhr){
            //xhr.status应该是430，由于跨域的原因变为0了，这里要判断一下
            console.log(xhr.status);
            $(".want-nav-un-login-block").css("display","block");
            $(".want-nav-has-login-block").css("display","none");
        },
        complete(){
            setCookie('username','');
            setCookie('headImg','');
            setCookie('isSignIn',false);
            setCookie('userId','');
            setCookie('nickName','');
        }
    })
}