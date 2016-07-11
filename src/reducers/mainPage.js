import {PUT_DATA} from "../constants/constant"

const initState = {
  data:"none"
}

export default function putData(state = initState,action){
  switch (action.type){
    case PUT_DATA:
      return Object.assign({}, state, {
        data:action.data
      })
    default:
      return state
  }
}
