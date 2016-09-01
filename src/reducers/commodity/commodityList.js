import {GET_ALL_COMMODITY} from "../../constants/constant"

const initState = {
    data:[]
};

export default function commodityList(state = initState,action){
    switch (action.type){
        //获取所有列表数据
        case GET_ALL_COMMODITY:
            return Object.assign({}, state, {
                data:action.data
            });
        default:
            return state;
    }
}