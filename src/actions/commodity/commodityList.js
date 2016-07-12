import {GET_ALL_COMMODITY,JSON_DATA,DISPLAY_DETAIL} from "../../constants/constant"

export function getAllCommodity(){
    console.log("action data:"+JSON_DATA.data)
    return {type:GET_ALL_COMMODITY,
        data:JSON_DATA.data}
}

export function toggleDetailDisplay(data,display){
    console.log(data);
    return {
        type:DISPLAY_DETAIL,
        display:display,
        detailData:data
    }
}
