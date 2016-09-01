import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CommodityDetailPage from '../../components/commodity/commodityDetailPage';
import * as Actions from '../../actions/commodity/commodityDetailPage';

//将state.initCounter绑定到组件props的initCounter
function mapStateToProps(state) {
    return {
        //详情页面中的商品数据
        urlDetailData:state.CommodityDetailPage.data,
        //详情页面中的推荐数据
        recommendData:state.CommodityDetailPage.recommendData
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(CommodityDetailPage)