/**
 * 该文件用于暴露一个 store对象
 */
import {createStore, applyMiddleware} from 'redux'
/**
 * 引入redux-thunk 支持异步的action
 */
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducers from './reducers/index'

// const store = createStore(countReducer, applyMiddleware(thunk))
// const store = createStore(allReduceers, applyMiddleware(thunk))
// 引入开发者工具
// 1. 无中间件的情况
// const store = createStore(allReduceers, composeWithDevTools())
// 2. 有中间件的情况
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
export default store;
