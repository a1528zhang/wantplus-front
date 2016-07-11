import { combineReducers } from 'redux';
import mainPage from './mainPage';

//使用redux的combineReducers方法将所有reducer打包起来
//const rootReducer = Object.assign(reducer, reducerBlack)
const rootReducer = combineReducers({
  mainPage
})

export default rootReducer
