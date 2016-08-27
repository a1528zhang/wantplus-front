import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CommodityDetailPage from '../../components/commodity/commodityDetailPage'
import * as Actions from '../../actions/commodity/commodityDetailPage'
//将state.initCounter绑定到组件props的initCounter
function mapStateToProps(state) {
    return {
        urlDetailData:state.CommodityDetailPage.data,
        recommendData:state.CommodityDetailPage.recommendData
    }
}
//将action中的所有方法绑定到props上,这样组件就有了绑定的方法
//function mapDispatchToProps(dispatch) {//绑定action文件
//    return bindActionCreators(Actions, dispatch);
//}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上

function mapDispatchToProps(dispatch) {//绑定action文件
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(CommodityDetailPage)