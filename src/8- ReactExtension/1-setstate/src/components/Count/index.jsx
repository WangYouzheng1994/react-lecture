import React, {Component} from 'react'

export default class Count extends Component {
    state = {count:0}

    increment = () => {
        const {value} = this.selectNumber;
        const {count} = this.state;
        // value*1的目的是转成数字 否则count+value变成拼串了
        // this.setState({count: count+value*1})

        // 对象+ 回调函数
/*
        this.setState({count: count+value*1}, function () {
            console.log("回调：我更新成功了哈~", this.state.count)
        })
        console.log("我更新成功了哈~", this.state.count)
*/

        // 函数 + 回调函数
        /*this.setState((state, props) => {
            return {count: state.count+1}
        }, () => {
            console.log("函数 + 回调函数：我更新成功了哈~", this.state.count)
        });*/

        // 函数 + 回调函数 简写
        this.setState((state) => ({count: state.count+1}))

    }
    decrement = () => {
        const {value} = this.selectNumber;
        const {count} = this.state;
        this.setState({count: count-value*1})
    }
    incrementIfOdd = () => {
        const {value} = this.selectNumber;
        const {count} = this.state;
        if (count %2 !== 0) {
            this.setState({count: count+value*1})
        }
    }
    incrementAsync = () => {
        const {value} = this.selectNumber;
        const {count} = this.state;
        setTimeout(() => {
            this.setState({count: count+value*1})
        }, 500)
    }

    render() {
        return (
            <div>
                <h1>当前求和为：{this.state.count}</h1>
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
