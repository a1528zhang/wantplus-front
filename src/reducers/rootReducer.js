import { combineReducers } from 'redux';
import CommodityList from './commodity/commodityList';
import CommodityDetailMask from './commodity/commodityDetailMask';
import ShopList from './shop/shopList';
import CommodityDetailPage from './commodity/commodityDetailPage'
import PersonalPage from './personal/personalPage'

//使用redux的combineReducers方法将所有reducer打包起来
//const rootReducer = Object.assign(reducer, reducerBlack)
const rootReducer = combineReducers({
  CommodityList:CommodityList,
  CommodityDetailMask:CommodityDetailMask,
  ShopList:ShopList,
  CommodityDetailPage:CommodityDetailPage,
  PersonalPage:PersonalPage
})

export default rootReducer;
