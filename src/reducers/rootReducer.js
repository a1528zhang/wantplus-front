import { combineReducers } from 'redux';
import CommodityList from './commodity/commodityList';
import CommodityDetail from './commodity/commodityDetail';
import ShopList from './shop/shopList';
import CommodityDetailPage from './commodity/commodityDetailPage'

//使用redux的combineReducers方法将所有reducer打包起来
//const rootReducer = Object.assign(reducer, reducerBlack)
const rootReducer = combineReducers({
  CommodityList:CommodityList,
  CommodityDetail:CommodityDetail,
  ShopList:ShopList,
  CommodityDetailPage:CommodityDetailPage
})

export default rootReducer
