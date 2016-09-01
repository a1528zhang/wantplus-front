import { HIDDEN_COMMODITY_DETAIL } from "../../constants/constant"


export function hiddenCommodityDetail(displayDetail,detailData,originalUrl){
    //取消锁定滚动条
    $("body").attr("class","");
    //地址栏目中替换了原地址
    window.history.pushState({},document.title ,originalUrl);
    return {
        type:HIDDEN_COMMODITY_DETAIL,
        displayDetail:displayDetail,
        detailData:detailData
    };
}

