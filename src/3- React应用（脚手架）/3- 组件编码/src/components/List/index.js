import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Item from '../Item'
import './index.css'

class Index extends Component {
    static propTypes = {
        // todos、updateTodo是从app.js 调用的外部传入的props参数
        todos: PropTypes.array.isRequired,
        updateTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }

    render() {
        const {todos, updateTodo, deleteTodo} = this.props;
        return (
            <ul className="todo-main">
                {
                    todos && todos.map(todo => {
                        // return <Item key={todo.id} id={todo.id} name={todo.name}/>
                        return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                    })
                }
            </ul>
        )
    }
}

export default Index;