import * as Actions from './action'
import * as ActionBlack from './actionBlack'
import * as ActionNew from './actionNew'

export default Object.assign(Actions,ActionBlack,ActionNew);//合并多个action对象