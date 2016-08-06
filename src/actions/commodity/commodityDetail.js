import {HIDDEN_COMMODITY_DETAIL} from "../../constants/constant"

export function hiddenCommodityDetail(displayDetail,detailData,originalUrl){
    //取消锁定滚动条
    console.log(originalUrl);
    $("body").attr("class","");
    window.history.pushState({},document.title ,originalUrl);

    return {
        type:HIDDEN_COMMODITY_DETAIL,
        displayDetail:displayDetail,
        detailData:detailData
    }
}

