import React, {Component, PropTypes } from 'react'
import { Router, Route, Link } from 'react-router'
import { render } from 'react-dom';

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
        xhr.onload = function () {
            alert("上传完成!");
        };
        xhr.send(form);
        //$.ajaxFileUpload({
        //    type:"POST",
        //    url:'http://localhost:8080/wantplus/action/user/register',
        //    secureuri:false,
        //    fileElementId:'file',//file标签的id
        //    dataType: "json",//返回数据的类型
        //    enctype:"multipart/form-data",
        //    data:{
        //        username:$(".want-sign-up-user-email-input").val(),
        //        password:$(".want-sign-up-user-password-input").val(),
        //        nickName:$(".want-sign-up-user-nickname-input").val()
        //    },
        //    success: function (data) {
        //        console.log(data);
        //    }
        //});
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