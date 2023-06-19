/**
 * 1. 该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
 * 2. reducer函数会接到两个参数，分别为：之前的状态prestate, 动作对象action
 */
const initState = 0;
export default function countReducer(preState=initState, action) {
    /*if (!preState) {
        preState = 0;
    }*/
    const {type, data} = action;

    switch (type) {
        case 'increment' :
            return preState + data;
            break;
        case 'decrement':
            return preState - data;
        default:
            return preState;
    }
}
