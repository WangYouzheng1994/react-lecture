import {INCREMENT, DECREMENT} from "./constant";
import store from './store'

/**
 * 该文件用于Count组件生成action对象
 */
export const createIncrementAction = data => ({type: INCREMENT, data})
export const createDecrementAction = data => ({type: DECREMENT, data})
/* 用lambda进行简化
function createDecrementAction(data) {
    return {type:'decrement', data};
}
*/

/**
 * 异步的action
 */
export const createIncrementAsyncAction = (data, time) => {
    /*
        自己要调用store
    return () => {
        setTimeout(() => {
           store.dispatch(createIncrementAction(data))
        }, time);
    }*/

    /**
     * 直接用redux傳進來的dispatch實現
     */
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time);
    }
}
