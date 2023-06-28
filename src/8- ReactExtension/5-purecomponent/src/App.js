import React from 'react';
import './App.css'

class App extends React.Component {
    state = {"carName": "奔驰C36"}

    /**
     * 切换车辆~~
     */
    changeCar = () => {
        this.setState({"carName": "迈巴赫"});
    }

    /**
     * 判定是否应该render~ 声明周期钩子
     *
     * @param nextProps
     * @param nextState
     * @param nextContext
     */
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.state.carName == nextState.carName) {
            return false;
        }
        return true;
    }

    /**
     * 渲染页面
     *
     * @returns {JSX.Element}
     */
    render() {
        return (
            <div className="parent">
                <h3>我是Parent组件</h3>
                <span>我的车名字是：{this.state.carName}</span><br/>
                <button onClick={this.changeCar}>点我换车</button>
                <Child carName={this.state.carName}/>
            </div>
        )
    }
}

export default App;

class Child extends React.Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(nextProps);
        console.log(this.props.carName);
        return this.props.carName !== nextProps.carName;
    }

    render() {
        return (
            <div>
                <h4>我是Child组件</h4>
                <span>Parent车的名字是:{this.props.carName}</span>
            </div>
        )
    }
}
