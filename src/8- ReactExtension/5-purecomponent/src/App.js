import React from 'react';
import './App.css'

class App extends React.PureComponent {
    state = {"carName": "奔驰C36"}

    /**
     * 切换车辆~~
     */
    changeCar = () => {
        this.setState({"carName": "迈巴赫"});
    }

    /**
     * 渲染页面
     *
     * @returns {JSX.Element}
     */
    render() {
        console.log("parent")
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

class Child extends React.PureComponent {

    render() {
        console.log("child")
        return (
            <div>
                <h4>我是Child组件</h4>
                <span>Parent车的名字是:{this.props.carName}</span>
            </div>
        )
    }
}
