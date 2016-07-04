import { Router, Route, Link,hashHistory } from 'react-router';
import {Component} from 'react';
import Hello from  './components/Hello'
import './css/style.css'

let Main = React.createClass({
    render() {
        return (
            <div id="content">
                <p>内容</p>
                <Hello/>
            </div>
        );
    }
});

let Routes =React.createClass({
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Main}>
                </Route>
            </Router>
    )
    }
})

ReactDOM.render(React.createElement(Routes),document.getElementById('content'));