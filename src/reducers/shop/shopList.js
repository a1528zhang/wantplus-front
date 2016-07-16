import {GET_ALL_SHOP} from "../../constants/constant"

const initState = {
    data:[]
}

export default function shopList(state = initState,action){
    switch (action.type){
        case GET_ALL_SHOP:
            console.log("shop reducer data"+action.data)
            return Object.assign({}, state, {
                data:action.data
            })
        default:
            return state
    }
}