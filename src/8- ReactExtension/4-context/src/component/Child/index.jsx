import React, {Component} from 'react';
// import {MyContext} from "../Grand";
import MyContext from '../../context/Mycontext'

/*
类式组件
class Child extends Component {
    static contextType = MyContext;

    render() {
        console.log(this);
        console.log(this.context);
        return (
            <div className="child">
                你好，我是child
                <h4>我从最外层拿到的用户名是：{this.context}</h4>
            </div>
        )
    }
}*/




// -----
// 函数式组件，使用<Consumer>标签包裹期望使用context内容的代码

function Child() {
    return (
        <div className="child">
            <MyContext.Consumer>
                {
                    // return <span>返回节点</span>
                    /*value => {
                        // value就是context的值
                        return `${value.username}, 年龄是：${value.age}`
                    }*/
                    // 简写
                    value => `${value.username}, 年龄是：${value.age}`
                }
            </MyContext.Consumer>
        </div>
    )
}

export default Child;
