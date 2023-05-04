import React, {Component} from 'react';
import Item from '../Item'
import './index.css'

class Index extends Component {

    render() {
        const {todos, updateTodo} = this.props;
        return (
            <ul className="todo-main">
                {
                    todos && todos.map(todo => {
                        // return <Item key={todo.id} id={todo.id} name={todo.name}/>
                        return <Item key={todo.id} {...todo} updateTodo={updateTodo}/>
                    })
                }
            </ul>
        )
    }
}

export default Index;