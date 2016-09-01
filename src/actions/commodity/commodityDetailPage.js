import {
    GET_COMMODITY_DETAIL_DATA,
    GET_COMMODITY_DETAIL_RECOMMEND_DATA,
    FROM_RECOMMEND_GET_DETAILS_DATA } from "../../constants/constant";

//获取详情页信息
export function getCommodityDetailData(commodityDetailId){
    let result ;
    $.ajax({
        type:"GET",
        url:"http://121.42.136.146/wantplus/action/commodity/getCommodityById?commodityId="+commodityDetailId,
        datatype:"json",
        async: false,
        success: function (data) {
            result = JSON.parse(data).data;
        }
    });
    return {
        type:GET_COMMODITY_DETAIL_DATA,
        data:result
    }
}

//获取详情页推荐信息
export function getCommodityDetailRecommendData(commodityDetailId){
    let result ;
    $.ajax({
        type:"GET",
        url:"http://121.42.136.146/wantplus/action/commodity/otherFromShop?commodityId="+commodityDetailId,
        datatype:"json",
        async: false,
        success: function (data) {
            result = JSON.parse(data).data;
            console.log(result);
        }
    });
    return {
        type:GET_COMMODITY_DETAIL_RECOMMEND_DATA,
        recommendData:result
    }
}

//点击详情页面推荐的商品,获得该商品的推荐信息
export function fromRecommendGetDetailsData(commodityDetailId){
    //let result ;
    //$.ajax({
    //    type:"GET",
    //    url:"http://121.42.136.146/wantplus/action/commodity/getCommodityById?commodityId="+commodityDetailId,
    //    datatype:"json",
    //    async: false,
    //    success: function (data) {
    //        result = JSON.parse(data).data;
    //        console.log(result);
    //    }
    //});
    //return {
    //    type:GET_COMMODITY_DETAIL_RECOMMEND_DATA,
    //    recommendData:result
    //}
    alert(commodityDetailId);
}