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
                        品质·生活
                    </div>
                    <div className="want-sign-up-user-account">
                        <div className="want-sign-up-input-title">
                            邮箱地址
                        </div>
                        <input className="want-sign-up-input"/>

                        <div className="want-sign-up-input-title">
                            密码
                        </div>
                        <input className="want-sign-up-input" type="password"/>

                        <div className="want-sign-up-input-title">
                            昵称
                        </div>
                        <input className="want-sign-up-input"/>
                    </div>

                    <div className="want-sign-up-user-info">

                        <div className="want-sign-up-img-title">
                            上传你的头像
                        </div>
                        <div className="want-sign-up-user-preview-image-frame">
                            <img className="want-sign-up-user-preview-image"
                                 src="http://7xwfiz.com1.z0.glb.clouddn.com/smile.svg"
                                 onClick={this.imgSelect}/>
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