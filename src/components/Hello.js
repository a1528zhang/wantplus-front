import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import lightStore from '../stores/stroe'
import {changeGreen, changeBlue} from '../action/action'

let store = lightStore();

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

let hello =React.createClass({
    goBlue(){
        store.dispatch(changeBlue());
        $("#text").css("backgroundColor",store.getState().color);
    },
    goGreen(){
        store.dispatch(changeGreen());
        $("#text").css("backgroundColor",store.getState().color);
    },
    render() {
        return (
            <div>
                <p id="text">屠龙宝刀，点击就送!!</p>
                <button onClick={this.goGreen}>变绿</button>
                <button onClick={this.goBlue}>变蓝</button>
            </div>
        )
    }
})

export default hello;