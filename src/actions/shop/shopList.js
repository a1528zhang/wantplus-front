import {SHOP_DATA,GET_ALL_SHOP} from "../../constants/constant"

export function getAllShop(){
    return {
        type:GET_ALL_SHOP,
        data:SHOP_DATA.data
    }
}