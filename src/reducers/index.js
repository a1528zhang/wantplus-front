import { combineReducers } from 'redux'
import reducer from './reducer'
import reducerBlack from './reducerBlack'
import reducerNew from './reducerNew'

//使用redux的combineReducers方法将所有reducer打包起来
//const rootReducer = Object.assign(reducer, reducerBlack)
const rootReducer = combineReducers({
  reducer,
  reducerBlack,
  reducerNew
})

export default rootReducer
