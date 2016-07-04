import {createStore} from 'redux'
import light from '../reducers/reducer'

export default function lightStore(initState){
    return createStore(light,initState); // 初始化创建
}