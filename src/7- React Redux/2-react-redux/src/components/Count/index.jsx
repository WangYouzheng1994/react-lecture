import React, {Component} from 'react'
// 引入redux store
import store from '../../redux/store'

export default class Count extends Component {

    /**
     * 组件挂载后初始化，
     */
/*    componentDidMount() {
        /!**
         * 初始化redux中的状态变化。原先使用state的方式，当我们调用setState的时候会触发页面渲染
         * 因为redux是第三方插件，所以现在store的值更新了但是没有触发渲染。
         *!/
        // 订阅store更新的回调
        store.subscribe(() => {
            // 调用render是不好用的
            this.setState({});// 强行用setState触发 render()
        })
    }
    如果以后有好多组件，那么都得写监听就太麻烦了 可以直接在 index.js中重新初始化根节点
    */

    /**
     * 加法
     */
    increment = () => {
        const {value} = this.selectNumber;
        // 调用action，redux最终会调用到我们自定义的reducer function逻辑
        store.dispatch({type:'increment', data:value*1})
    }

    /**
     * 减法
     */
    decrement = () => {
        const {value} = this.selectNumber;
        // 调用action，redux最终会调用到我们自定义的reducer function逻辑
        store.dispatch({type:'decrement', data:value*1})
    }
    /**
     * 当前是奇数才加
     */
    incrementIfOdd = () => {
        const {value} = this.selectNumber;
        const count = store.getState();
        if (count %2 !== 0) {
            store.dispatch({type:'increment', data:value*1})
        }
    }

    /**
     * 异步加
     */
    incrementAsync = () => {
        const {value} = this.selectNumber;
        setTimeout(() => {
            store.dispatch({type:'increment', data:value*1})
        }, 500)
    }

    render() {
        return (
            <div>
                <h1>当前求和为：{store.getState()}</h1>
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
