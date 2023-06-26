// 引入常量
import {ADD_PERSON} from '../constant'

const initState = [{id:'001', name:'tom', age: 18}];
export default function personReducer(preState= initState, action) {
    const {type, data} = action;

    switch (type) {
        case ADD_PERSON :
            // 把新增的值 和之前的数组进行合并成新的数组
            return [data, ...preState];
            break;
        default:
            return preState;
    }
}
