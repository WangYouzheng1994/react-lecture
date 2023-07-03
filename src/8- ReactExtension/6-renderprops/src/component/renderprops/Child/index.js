import React, {Component} from 'react';

class Child extends Component {
    render() {
        return (
            <div>
                <h3>我是renderprops/child</h3>
                上游给来的数据{this.props.name}, 标签体中的内容为{this.props.children}
            </div>
        );
    }
}

export default Child;
