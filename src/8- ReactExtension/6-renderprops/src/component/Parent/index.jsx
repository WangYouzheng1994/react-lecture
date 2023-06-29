import React, {Component} from 'react';
import Child from "../Child";

class Parent extends Component {
    render() {
        return (
            <div className="parent">
                <h3>我是Parent组件</h3>
                {/*<Child>你好我是parent里面传递的child内容</Child>*/}
                {this.props.children}
            </div>
        );
    }
}

export default Parent;
