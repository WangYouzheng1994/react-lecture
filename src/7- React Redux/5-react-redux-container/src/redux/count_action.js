import {INCREMENT, DECREMENT} from "./constant";

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
