import React, {Component} from 'react';

class Child extends Component {
    render() {
        return (
            <div className="child">
                <h3>我是child组件</h3>
                <span>接收到的内容是：{this.props.children}</span>
            </div>
        );
    }
}

export default Child;
