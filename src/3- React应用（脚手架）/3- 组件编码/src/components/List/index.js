import React, {Component} from 'react';
import Item from '../Item'
import './index.css'

class Index extends Component {
    render() {
        return (
            <div>
                <ul className="todo-main">
                    <Item></Item>
                </ul>
            </div>
        )
    }
}

export default Index;