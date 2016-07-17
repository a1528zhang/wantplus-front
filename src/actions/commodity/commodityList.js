import {GET_ALL_COMMODITY,JSON_DATA,DISPLAY_COMMODITY_DETAIL,ADD_COMMODITY_URL} from "../../constants/constant"

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
/**
 * 改变url地址
 * @param commodityId
 * @returns {{type, displayDetail: *, detailData: *}}
 */
export function addCommodityUrl(commodityId){
    let originalUrl  = window.location.href;
    let start = originalUrl.indexOf("/#/")+3;
    let end = originalUrl.indexOf("?");
    console.log(start+"-----"+end);
    let startsententce = originalUrl.substring(0,start);
    let endsententce = originalUrl.substring(end);
    console.log(startsententce+"********"+endsententce);
    let newUrl = startsententce+"commodityDetail/"+commodityId+endsententce;
    console.log(newUrl);
    window.history.pushState({},document.title ,newUrl);
    return {
        type:ADD_COMMODITY_URL,
        commodityId:commodityId,
        originalUrl:originalUrl
    }
}
