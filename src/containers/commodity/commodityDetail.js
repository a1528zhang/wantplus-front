import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CommodityDetail from '../../components/commodity/commodityDetail';
import {toggleDetailDisplay} from "../../actions/commodity/commodityList"

//将state.initCounter绑定到组件props的initCounter
function mapStateToProps(state) {
    return {
        display:state.CommodityDetail.display,
        detailData:state.CommodityDetail.detailData
    }
}

function mapDispatchToProps(dispatch) {//绑定action文件
    return bindActionCreators(toggleDetailDisplay, dispatch);
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps,mapDispatchToProps)(CommodityDetail)