import { GET_COMMODITY_DETAIL_DATA ,GET_COMMODITY_DETAIL_RECOMMEND_DATA} from "../../constants/constant";

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