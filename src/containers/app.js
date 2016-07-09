import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Hello from '../components/Hello'
import Actions from  '../actions/actionIndex'

//将state.initCounter绑定到组件props的initCounter
function mapStateToProps(state) {
    return {
        initCounter: state.reducer.initCounter,
        text:state.reducer.text
    }
}
//将action中的所有方法绑定到props上,这样组件就有了绑定的方法
function mapDispatchToProps(dispatch) {//绑定action文件
    return bindActionCreators(Actions, dispatch);
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(Hello)