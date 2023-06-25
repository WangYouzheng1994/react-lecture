import React, {Component} from 'react'
// 引入redux store
// import store from '../../redux/store'
// 引入actionCreator，创建action对象
import {createIncrementAction, createDecrementAction} from '../../redux/count_action'

export default class Count extends Component {

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
            store.dispatch(createIncrementAction(value*1, 500));
        }, 500)*/
        this.props.jiaAsycn(value*1, 500);
    }

    render() {
        return (
            <div>
                {/*<h1>当前求和为：{store.getState()}</h1>*/}
                <h1>当前求和为：{this.props.count}</h1>

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
