import {GET_ALL_COMMODITY} from "../../constants/constant"

const initState = {
    data:[]
}

export default function commodityList(state = initState,action){
    switch (action.type){
        case GET_ALL_COMMODITY:
            console.log("reducer data"+action.data)
            return Object.assign({}, state, {
                data:action.data
            })
        default:
            return state
    }
}