import {CHANGE_NEW} from '../constants/constant'

const initialFilterItem = {
    data:""
}

export default function changeNew(state=initialFilterItem,action) {
    switch (action.type) {
        case CHANGE_NEW:
            return Object.assign({}, state, {
                data: action.data
            })
        default:
            return state
    }
}
