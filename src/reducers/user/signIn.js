import {SIGN_IN} from "../../constants/constant"

const initState = {
    isSignIn:false
}

export default function signIn(state = initState,action){
    switch (action.type){
        case SIGN_IN:
            return Object.assign({}, state, {
                isSignIn:action.isSignIn
            })
        default:
            return state
    }
}