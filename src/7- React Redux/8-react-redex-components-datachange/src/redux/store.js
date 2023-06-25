/**
 * 该文件用于暴露一个 store对象
 */
import {createStore, applyMiddleware} from 'redux'
import countReducer from './reducers/count'
/**
 * 引入redux-thunk 支持异步的action
 */
import thunk from 'redux-thunk'

const store = createStore(countReducer, applyMiddleware(thunk))
export default store;
