/**
 * 该文件用于暴露一个 store对象
 */
import {createStore} from 'redux'
import countReducer from './count_reducer'

const store = createStore(countReducer)
export default store;
