import React, {Component} from 'react';
import Child from "../Child";

class Parent extends Component {
    render() {
        return (
            <div className="parent">
                你好，我是parent

                <Child/>
            </div>
        )
    }
}

export default Parent;
