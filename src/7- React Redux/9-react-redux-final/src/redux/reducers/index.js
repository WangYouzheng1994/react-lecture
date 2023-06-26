/**
 * 该文件用以汇总所有的reducer，用以分离store.js中的代码
 */

// 引入combineReducers 用以汇总
import {combineReducers} from 'redux'
import count from './count'
import person from "./person";

// 多个reducer合并
export default combineReducers({person, count});
