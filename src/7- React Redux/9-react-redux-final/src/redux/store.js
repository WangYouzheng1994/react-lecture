/**
 * 该文件用于暴露一个 store对象
 */
import {createStore, applyMiddleware, combineReducers} from 'redux'
import countReducer from './reducers/count'
import personReducer from "./reducers/person";
/**
 * 引入redux-thunk 支持异步的action
 */
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

// 多个reducer合并
const allReduceers = combineReducers({person:personReducer, count: countReducer});

// const store = createStore(countReducer, applyMiddleware(thunk))
// const store = createStore(allReduceers, applyMiddleware(thunk))
// 引入开发者工具
// 1. 无中间件的情况
// const store = createStore(allReduceers, composeWithDevTools())
// 2. 有中间件的情况
const store = createStore(allReduceers, composeWithDevTools(applyMiddleware(thunk)))
export default store;
