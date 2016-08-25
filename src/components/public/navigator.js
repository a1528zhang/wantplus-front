import React, { Component, PropTypes } from 'react'
import { Router, Route, Link } from 'react-router'
import { render } from 'react-dom'
import SignIn from '../../containers/user/signIn'
import {logout} from '../../utils/stringUtils';

class Navigator extends Component {
  componentDidMount(){
    const {readUserInfo} = this.props;
    readUserInfo();
  }
  headIconClick(){
    console.log("个人中心");
  }
  loginBtnClick(){
    $(".want-login").css("display","block");
  }
  logoutBtnClick(){
    logout();
  }
  render() {
        return (
            <div className="want-nav-box">

              <div className="want-nav-midbox">
                <div className="want-nav-left">
                  <Link to="/">
                    <div className="want-nav-click" id="want-nav-homepage-id">
                      <div className="want-nav-icon">
                        <img src="http://7xwfiz.com1.z0.glb.clouddn.com/home.svg"/>
                      </div>
                      <div className="want-nav-text">
                        主页
                      </div>
                    </div>
                  </Link>
                  <Link to="/ShopList">
                    <div className="want-nav-click" id="want-nav-shoplist-id">
                      <div className="want-nav-icon">
                        <img src="http://7xwfiz.com1.z0.glb.clouddn.com/shop.svg"/>
                      </div>
                      <div className="want-nav-text">
                        商店
                      </div>
                    </div>
                  </Link>
                  <div className="want-nav-click">
                    <div className="want-nav-icon">
                      <img src="http://7xwfiz.com1.z0.glb.clouddn.com/star.svg"/>
                    </div>
                    <div className="want-nav-text">
                      特色
                    </div>
                  </div>
                </div>


                <div className="want-nav-right">
                  <div className="want-nav-un-login-block">
                    <div className="want-nav-join">
                    {
                      //<img src="http://7xwfiz.com1.z0.glb.clouddn.com/wechart.png"/>
                    }
                      <Link to="/signUp">
                        <span>注册</span>
                      </Link>
                    </div>
                    <div className="want-nav-login" onClick={this.loginBtnClick}>
                      <span>登录</span>
                    </div>
                    <div className="want-clear-float"></div>
                  </div>
                  <div className="want-nav-has-login-block">
                    <img className="want-nav-head-icon"  onClick={this.headIconClick}/>
                    <div className="want-nav-logout" onClick={this.logoutBtnClick}>
                      <span>注销</span>
                    </div>
                    <div className="want-clear-float"></div>
                  </div>
                  <div className="want-nav-search">
                    <div className="want-search-icon">
                      <img src="http://7xwfiz.com1.z0.glb.clouddn.com/search.svg"/>
                    </div>
                    <div className="want-search-input">
                      <input placeholder="输入商品" />
                    </div>
                  </div>
                  <div className="want-clear-float"></div>
                </div>
              </div>
              <SignIn/>
            </div>
        )
    }
}
export default Navigator;
