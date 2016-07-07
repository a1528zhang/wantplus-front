import { Router, Route, Link,hashHistory } from 'react-router';
import {Component} from 'react';
import { Provider } from 'react-redux'
import Hello from  './components/Hello'
import './css/style.css'
import './less/style.less'
import Store from './stores/stroe'
import App from './containers/app'

const store = Store()

let Main = React.createClass({
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
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