import React, {Component} from 'react';
import './index.css';

class Index extends Component {
    render() {
        return (
            <div className="todo-footer">
                <input type="checkbox"/>
                <span>
                        <span>已完成/全部2</span>
                    </span>

                <button className="btn btn-danger">清除已完成任务</button>
            </div>
        );
    }
}

export default Index;