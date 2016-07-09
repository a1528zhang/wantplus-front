import { combineReducers } from 'redux'
import reducer from './reducer'
import reducer2 from  './reducerBlack'

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
  reducer,
  reducer2
})

export default rootReducer
