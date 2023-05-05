import React, {Component} from 'react';
import './index.css';

class Index extends Component {

    /**
     * 设置全选
     *
     * @param event
     */
    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }

    /**
     * 清除已完成
     */
    handleClearAllDone = () => {
        this.props.clearAllDone();
    }

    render() {
        const {todos} = this.props;
        // 已完成数量
        const selected = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
        // 总数
        const total = todos.length;

        return (
            <div className="todo-footer">
                <input type="checkbox" onChange={this.handleCheckAll}/>
                <span>
                        <span>已完成{selected}/全部{total}</span>
                    </span>

                <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        );
    }
}

export default Index;