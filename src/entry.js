import { Router, Route, Link,hashHistory } from 'react-router'
import {Component} from 'react'
import { Provider } from 'react-redux'
import configureStore from './stores/store'
import Routers from './router'
//import 'antd/dist/antd.less'
import './less/mainPage.less'
import Root from './root'

const store = configureStore({});

let Main = React.createClass({
    render() {
        return (
            <Root store={store}/>
        );
    }
});

ReactDOM.render(<Main />,document.getElementById('content'));
