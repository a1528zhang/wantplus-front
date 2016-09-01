import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CommodityDetailMask from '../../components/commodity/commodityDetailMask';
import * as Actions from '../../actions/commodity/commodityDetail';

//将state.initCounter绑定到组件props的initCounter
function mapStateToProps(state) {
    return {
        //遮罩的出现状态
        displayDetail: state.CommodityDetailMask.displayDetail,
        //遮罩上的商品详情
        urlDetailData: state.CommodityDetailMask.detailData,
        //遮罩上的推荐商品
        recommendData: state.CommodityDetailMask.recommendDataMask,
        //取消遮罩后的原地址
        originalUrl: state.CommodityDetailPage.originalUrl
    };
}
//将action中的所有方法绑定到props上,这样组件就有了绑定的方法
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(CommodityDetailMask)