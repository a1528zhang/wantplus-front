import {GET_ALL_COMMODITY,JSON_DATA,DISPLAY_COMMODITY_DETAIL} from "../../constants/constant"

export function getAllCommodity(){
    return {
        type:GET_ALL_COMMODITY,
        data:JSON_DATA.data
    }
}

export function showCommodityDetail(data,displayDetail){
        //锁住滚动条
        $("body").attr("class","lock");
        $(".want-commodity-detail").css("overflow-y","auto");
    return {
        type:DISPLAY_COMMODITY_DETAIL,
        displayDetail:displayDetail,
        detailData:data
    }
}
