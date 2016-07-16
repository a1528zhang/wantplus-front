import {SHOP_DATA,GET_ALL_SHOP} from "../../constants/constant"

export function getAllShop(){
    console.log(" data:"+SHOP_DATA.data)
    return {
        type:GET_ALL_SHOP,
        data:SHOP_DATA.data
    }
}