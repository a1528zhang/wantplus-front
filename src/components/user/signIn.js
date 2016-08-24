import React, { Component, PropTypes } from 'react'
import { Router, Route, Link } from 'react-router'
import { render } from 'react-dom'

class SignIn extends Component {
    handleClicked(event) {
        console.log(event.target.classList[0]);
        if (event.target.classList[0] == "want-login") {
            $(".want-login").css("display","none");
        }
    }
    render(){
        const {signIn} = this.props;
        return (
            <div className="want-login" onClick={this.handleClicked}>
                <div className="want-login-box">
                    <div className="want-login-username-label">email</div>
                    <input className="want-login-username-input"/>
                    <div className="want-login-password-label">password</div>
                    <input className="want-login-password-input" type="password"/>
                    <div className="want-login-button" onClick={signIn}>登陆</div>
                </div>
            </div>
        )
    }
}

export default SignIn;
