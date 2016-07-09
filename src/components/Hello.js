import React, { Component, PropTypes } from 'react'
import { Router, Route, Link } from 'react-router'
import { render } from 'react-dom'

class hello extends Component {
    render() {
        const { lookState,goGreen, goBlue,goBlack,initCounter,text} = this.props;
        return (
            <div>
                <p id="text">屠龙宝刀，点击就送!!</p>
                <img src={require('../../1172135.png')}/>
                <img src={require("../../Dota.ico")}/>}
                <button onClick={() =>goGreen("666")}>变绿</button> /* 用这种function的方式传递参数*/
                <button onClick={goBlue}>变蓝</button>
                <button onClick={goBlack}>变黑</button>
                <button onClick={lookState}>查看状态同时变绿</button>
                Clicked: {initCounter}+{text} times
                <Link className="world" to="/world"><button>召唤world组件！</button></Link>
                <div id="contentWindow" onClick={this.handleClick}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

//限制组件的props安全
hello.propTypes = {
    //goGreen必须为fucntion,且必须存在
    goGreen: PropTypes.func.isRequired,
    goBlue: PropTypes.func.isRequired,
    goBlack: PropTypes.func.isRequired,
    lookState: PropTypes.func.isRequired,
    //initCounter必须为数字，且必须存在
    initCounter: PropTypes.number.isRequired
};

export default hello;