import { combineReducers } from 'redux';
import MainPage from './mainPage';
import CommodityList from './commodity/commodityList'
import CommodityDetail from './commodity/commodityDetail'


//使用redux的combineReducers方法将所有reducer打包起来
//const rootReducer = Object.assign(reducer, reducerBlack)
const rootReducer = combineReducers({
  MainPage:MainPage,
  CommodityList:CommodityList,
  CommodityDetail:CommodityDetail
})

export default rootReducer
