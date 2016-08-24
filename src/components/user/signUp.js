import React, {Component, PropTypes } from 'react'
import { Router, Route, Link } from 'react-router'
import { render } from 'react-dom';
import { setCookie } from '../../utils/stringUtils'

class Register extends Component{
    uploadButtonClick(){
        console.log("signUp");
        var fileObj = $(".want-sign-up-user-headImg-input")[0].files[0];
        //var fileObj = document.getElementByIdx_x_x("file").files[0];
        var url = "http://localhost:8080/wantplus/action/user/register";
        var form = new FormData();
        form.append("username", $(".want-sign-up-user-email-input").val());
        form.append("password", $(".want-sign-up-user-password-input").val());
        form.append("nickName", $(".want-sign-up-user-nickname-input").val());
        form.append("file", fileObj);

        var xhr = new XMLHttpRequest();
        xhr.open("post", url, true);
        xhr.onreadystatechange = callback;

        function callback() {
            //接收响应数据
            //判断对象的状态是交互完成
            if (xhr.readyState == 4) {
                //判断http的交互是否成功
                if (xhr.status == 200) {
                    //获取服务漆器端返回的数据
                    //获取服务器段输出的纯文本数据
                    var responseText = xhr.responseText;
                    var data = JSON.parse(responseText);
                    console.log(data.data.username);
                    if (data.data != null && data.data != ''){
                        console.log(data.data.username);
                        setCookie("username",data.data.username);
                        setCookie("headImg",data.data.headImg);
                        setCookie("userId",data.data.userId);
                    }
                    console.log(responseText);
                } else {
                    console.log("请求出错");
                }
            }
        }
        xhr.send(form);
    }
    imgSelect(){
        $(".want-sign-up-user-headImg-input").click();
    }
    fileChange(event){
        // 如果浏览器不支持FileReader，则不处理
        if (!window.FileReader) return;
        var files = event.target.files;
        for (var i = 0, f; f = files[i]; i++) {
            if (!f.type.match('image.*')) {
                continue;
            }
            var reader = new FileReader();
            reader.onload = (function(theFile) {
                return function(e) {
                    // img 元素
                    $('.want-sign-up-user-preview-image').attr("src",e.target.result);
                };
            })(f);
            reader.readAsDataURL(f);
        }
    }
    render(){
        return (
            <div className="want-sign-up-box">
                <div className="want-sign-up-context">
                    <div className="want-sign-up-title">
                        <p className="want-sign-up-title-text">品质·生活</p>
                    </div>
                    <div className="want-sign-up-user-account">
                        <div className="want-sign-up-user-email-label">
                            <p >email</p>
                        </div>
                        <input className="want-sign-up-user-email-input"/>
                        <div className="want-sign-up-user-password-label">
                            <p >password</p>
                        </div>
                        <input className="want-sign-up-user-password-input" type="password"/>
                    </div>
                    <div className="want-sign-up-user-info">
                        <div className="want-sign-up-user-nickname-label">
                            <p>你的名字</p>
                        </div>
                        <input className="want-sign-up-user-nickname-input"/>
                        <div className="want-sign-up-user-headImg-text">
                            <p>上传你的头像</p>
                        </div>
                        <div className="want-sign-up-user-preview-image-frame">
                            <img className="want-sign-up-user-preview-image"  onClick={this.imgSelect}/>
                        </div>
                        <div className="want-sign-up-user-headImg-upload-button" onClick={this.imgSelect}>upload</div>
                        <input className="want-sign-up-user-headImg-input" type="file" onChange={this.fileChange} name="file" id ="file"/>
                    </div>
                </div>
                <div className="want-sign-up-button" onClick={this.uploadButtonClick.bind(this)}>
                    <p className="want-sign-up-button-text">创建你的账户</p>
                </div>
            </div>
        )
    }
}

export default Register;