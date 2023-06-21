// 引入Count Component （其实就是UI
import CountUI from '../../components/Count'
// 引入action
import {createDecrementAction, createIncrementAction} from '../../redux/count_action'
// store不允许自己引入，需要从父组件传递进来
// 引入连接器，连接ui和redux
import {connect} from 'react-redux'

/**
 * redux 会把state传递进来 我们自己就不用引入store了
 * 该函数所返回的对象中的key/value 就是给ui组件props的key/value，作为状态store组件
 * 这个函数在redux中，称之为mapStateToProps
 *
 * @param state
 * @returns {{count}}
 */
function a(state) {
    return {count: state}
}

/**
 * redux 会把dispatch传递进来
 * 该函数所返回的对象中的key/value 就是给ui组件props的key/value，作为操作stroe的action
 * 这个函数在redux中，称之为mapDispatchToProps
 *
 * @param dispatch
 * @returns {{jia: jia}}
 */
function mapDispatchToProps(dispatch) {
    return {
        jia: (number) => {
            // 调用到redux的increment逻辑
            // dispatch({type: 'increment', data})
            dispatch(createIncrementAction(number))
        },

        jiaAsycn: (number) => {
            setTimeout(()=> {
                dispatch(createIncrementAction(number))
            }, 500)
        },

        jian: (number) => {
            dispatch(createDecrementAction(number));
        }
    }
}

/**
 * connect方法返回了一个方法
 * 第二个方法传入Component
 */
export default connect(mapDispatchToProps, b)(CountUI)
