import React, {Component} from 'react'
// 引入action
import {createDecrementAction, createIncrementAction, createIncrementAsyncAction} from '../../redux/actions/count'
// store不允许自己引入，需要从父组件传递进来
// 引入连接器，连接ui和redux
import {connect} from 'react-redux'

/**
 * UI Component
 */
class Count extends Component {

    /**
     * 加法
     */
    increment = () => {
        const {value} = this.selectNumber;
        // 调用action，redux最终会调用到我们自定义的reducer function逻辑
        // store.dispatch({type:'increment', data:value*1})
        // 调用Action
        // store.dispatch(createIncrementAction(value*1));

        this.props.jia(value*1);
    }

    /**
     * 减法
     */
    decrement = () => {
        const {value} = this.selectNumber;
        // 调用action，redux最终会调用到我们自定义的reducer function逻辑
        // store.dispatch({type:'decrement', data:value*1})
        // store.dispatch(createDecrementAction(value*1));
        this.props.jian(value*1);
    }

    /**
     * 当前是奇数才加
     */
    incrementIfOdd = () => {
        const {value} = this.selectNumber;
        // const count = store.getState();
        const count = this.props.count;
        if (count %2 !== 0) {
            // store.dispatch({type:'increment', data:value*1})
            // store.dispatch(createIncrementAction(value*1));
            this.props.jia(value*1);
        }
    }

    /**
     * 异步加
     */
    incrementAsync = () => {
        const {value} = this.selectNumber;
        /*setTimeout(() => {
            // store.dispatch({type:'increment', data:value*1})
            store.dispatch(createIncrementAction(value*1));
        }, 500)*/
        this.props.jiaAsycn(value*1, 500);
    }

    render() {
        return (
            <div>
                {/*<h1>当前求和为：{store.getState()}</h1>*/}
                <h2>我是Count组件，下方组件总人数为：{this.props.peoples.length}</h2>
                <h4>当前求和为：{this.props.count}</h4>

                {/*把select节点存到了 this.selectNumber*/}
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>

                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
                <button onClick={this.incrementAsync}>异步加和</button>
            </div>
        )
    }
}


// ------ 以下为容器组件相关内容

/**
 * redux 会把state传递进来 我们自己就不用引入store了
 * 该函数所返回的对象中的key/value 就是给ui组件props的key/value，作为状态store组件
 * 这个函数在redux中，称之为mapStateToProps
 *
 * @param state
 * @returns {{count}}
 */
/**
 * redux 会把dispatch传递进来
 * 该函数所返回的对象中的key/value 就是给ui组件props的key/value，作为操作stroe的action
 * 这个函数在redux中，称之为mapDispatchToProps
 *
 * @param dispatch
 * @returns {{jia: jia}}
 */

/**
 * connect方法接收俩参数：mapStateToProps 返回一个键值对的store,mapDispatchToProps 返回一个键值对的action
 * 并且connect又返回了一个方法
 * 第二个方法传入UI Component
 */
export default connect(
    // state.count 值的是 countReducer
    // state => ({count: state}),
    state => ({count: state.count, peoples: state.person}),

    /*dispatch => ({
        jia: number => dispatch(createIncrementAction(number)),
        jiaAsycn: (number,time) => dispatch(createIncrementAsyncAction(number, 500)),
        jian: number => dispatch(createDecrementAction(number))
    }*/
    {
        jia: createIncrementAsyncAction,
        jiaAsycn: createIncrementAsyncAction,
        jian: createDecrementAction
    }
)(Count)
