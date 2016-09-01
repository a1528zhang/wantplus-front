import {
    GET_ALL_COMMODITY,
    SHOW_COMMODITY_RECOMMEND,
    DISPLAY_COMMODITY_DETAIL,
    ADD_COMMODITY_URL,
    RECOMMEND_COMMODITY_DETAIL } from "../../constants/constant";

//获取首页的信息列表
export function getAllCommodity(pageNumber) {
    let result;
    $.ajax({
        type: "GET",
        url: "http://121.42.136.146/wantplus/action/commodity/getAllLCommodity?page=" + pageNumber,
        datatype: "json",
        async: false,
        success: function (data) {
            result = JSON.parse(data).data;
            console.log(result.userBrief);
        }
    });
    return {
        type: GET_ALL_COMMODITY,
        data: result
    };
}


//在遮罩上显示商品详情
export function showCommodityDetail(commdityId, displayDetail) {
    //锁住滚动条
    $("body").attr("class", "lock");
    $(".want-commodity-detail").css("overflow-y", "auto");

    let result = '';
    $.ajax({
        type: "GET",
        url: "http://121.42.136.146/wantplus/action/commodity/getCommodityById?commodityId=" + commdityId,
        datatype: "json",
        async: false,
        success: function (data) {
            result = JSON.parse(data).data;
        }
    });

    return {
        type: DISPLAY_COMMODITY_DETAIL,
        displayDetail: displayDetail,
        detailData: result
    };
}

//在遮罩上显示详情页面的推荐商品
export function showCommodityRecommend(commodityDetailId) {
    let result;
    $.ajax({
        type: "GET",
        url: "http://121.42.136.146/wantplus/action/commodity/otherFromShop?commodityId=" + commodityDetailId,
        datatype: "json",
        async: false,
        success: function (data) {
            result = JSON.parse(data).data;
        }
    });
    return {
        type: SHOW_COMMODITY_RECOMMEND,
        recommendData: result
    };
}


/*
 * 改变url地址
 * @param commodityId
 * @returns {{type, displayDetail: *, detailData: *}}
 */

export function addCommodityUrl(commodityId) {
    let originalUrl = window.location.href;
    let start = originalUrl.indexOf("/#/") + 3;
    let end = originalUrl.indexOf("?");
    console.log(start + "-----" + end);
    let startsententce = originalUrl.substring(0, start);
    let endsententce = originalUrl.substring(end);
    console.log(startsententce + "********" + endsententce);
    let newUrl = startsententce + "commodityDetail/" + commodityId + endsententce;
    console.log(newUrl);
    window.history.pushState({}, document.title, newUrl);
    return {
        type: ADD_COMMODITY_URL,
        commodityId: commodityId,
        originalUrl: originalUrl
    };
}
