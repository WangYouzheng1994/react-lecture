/**
 * 该文件用于Count组件生成action对象
 */
export const createIncrementAction = data => ({type: 'increment', data})
export const createDecrementAction = data => ({type: 'decrement', data})
/* 用lambda进行简化
function createDecrementAction(data) {
    return {type:'decrement', data};
}
*/
