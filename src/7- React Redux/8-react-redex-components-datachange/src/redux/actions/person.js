// 引入常量
import {ADD_PERSON} from '../constant'

/**
 * 创建增加一个人的action动作
 * @param personObj
 * @returns {{data, type}}
 */
export const createAddPersonAction = (personObj) => ({type:ADD_PERSON, data:personObj})
