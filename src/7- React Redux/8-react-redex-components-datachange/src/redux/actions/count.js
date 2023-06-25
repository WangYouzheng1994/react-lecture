import {INCREMENT, DECREMENT} from "./constant";
/**
 * 该文件用于Count组件生成action对象
 */

/* 用lambda进行简化
function createDecrementAction(data) {
    return {type:'decrement', data};
}
*/
export const createIncrementAction = data => ({type: INCREMENT, data})
export const createDecrementAction = data => ({type: DECREMENT, data})

/**
 * 异步的action redux 根据action的返回值类型决定的是不是异步，如果是function那么就是异步，否则是同步的
 *
 * @param data
 * @param time
 * @returns {(function(*): void)|*}
 */
export const createIncrementAsyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time)
    }
}
