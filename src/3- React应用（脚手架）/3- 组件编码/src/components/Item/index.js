import React, {Component} from 'react';
import './index.css'

class Index extends Component {
    render() {
        return (
                <li>
                    <label>
                        <input type="checkbox"/>
                        <span>内容</span>
                    </label>
                    <button> 删除</button>
                </li>
        );
    }
}

export default Index;