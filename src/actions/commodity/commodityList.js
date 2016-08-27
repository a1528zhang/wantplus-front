import {GET_ALL_COMMODITY,SHOW_COMMODITY_RECOMMEND,DISPLAY_COMMODITY_DETAIL,ADD_COMMODITY_URL,RECOMMEND_COMMODITY_DETAIL} from "../../constants/constant"

export function getAllCommodity(){
    let result ;
    $.ajax({
        type:"GET",
        url:"http://121.42.136.146/wantplus/action/commodity/getAllLCommodity?page=1",
        datatype:"json",
        async: false,
        success: function (data) {
            result = JSON.parse(data).data;
            console.log(result.userBrief);
        }
    });
    return {
        type:GET_ALL_COMMODITY,
        data:result
    }
}

export function showCommodityDetail(commdityId,displayDetail){
        //锁住滚动条
        $("body").attr("class","lock");
        $(".want-commodity-detail").css("overflow-y","auto");

    let result = '';
    $.ajax({
        type:"GET",
        url:"http://121.42.136.146/wantplus/action/commodity/getCommodityById?commodityId="+commdityId,
        datatype:"json",
        async: false,
        success: function (data) {
            result = JSON.parse(data).data;
        }
    });

    return {
        type:DISPLAY_COMMODITY_DETAIL,
        displayDetail:displayDetail,
        detailData:result
    };
}

export function showCommodityRecommend(commodityDetailId){
    let result ;
    $.ajax({
        type:"GET",
        url:"http://121.42.136.146/wantplus/action/commodity/otherFromShop?commodityId="+commodityDetailId,
        datatype:"json",
        async: false,
        success: function (data) {
            result = JSON.parse(data).data;
            //console.log(result);
        }
    });
    return {
        type:SHOW_COMMODITY_RECOMMEND,
        recommendData:result
    }
}

export function showRecommodList(){

    let result = '';
    $.ajax({
        type:"GET",
        url:"http://121.42.136.146/wantplus/action/commodity/otherFromShop?commodityId="+commdityId,
        datatype:"json",
        async: false,
        success: function (data) {
            result = JSON.parse(data).data;
        }
    });

    return {
        type:RECOMMEND_COMMODITY_DETAIL,
        recommodData:result
    };
}
/*
 * 改变url地址
 * @param commodityId
 * @returns {{type, displayDetail: *, detailData: *}}
 **/
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
