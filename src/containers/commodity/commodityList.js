import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CommodityList from '../../components/commodity/commodityList';
import * as Actions from "../../actions/commodity/commodityList";

//将state.initCounter绑定到组件props的initCounter
function mapStateToProps(state) {
    return {
        //商品列表数据
        data: state.CommodityList.data,
        //遮罩中商品出现的 css 参数
        displayDetail: state.CommodityDetailMask.displayDetail,
        //遮罩中的详细数据
        detailData: state.CommodityDetailMask.detailData,
        //遮罩中的推荐数据
        recommendData: state.CommodityDetailMask.recommendData,
        //商品详情页面中的的商品 id
        commodityId: state.CommodityDetailPage.commodityId,
        //商品列表的原地址
        originalUrl: state.CommodityDetailPage.originalUrl
    };
}
//将action中的所有方法绑定到props上,这样组件就有了绑定的方法
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(CommodityList)