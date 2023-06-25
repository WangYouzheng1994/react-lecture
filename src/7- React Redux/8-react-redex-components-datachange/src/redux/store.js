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

// 多个reducer合并
const allReduceers = combineReducers({person:personReducer, count: countReducer});

// const store = createStore(countReducer, applyMiddleware(thunk))
const store = createStore(allReduceers, applyMiddleware(thunk))
export default store;
