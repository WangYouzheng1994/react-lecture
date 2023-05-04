/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

import React from 'react'

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

// 创建类式组件
class App extends React.Component {
    // 初始化状态
    state = {
        todos: [
            {id: '001', name: '吃饭', done: true},
            {id: '002', name: '睡觉', done: true},
            {id: '003', name: '打豆豆', done: false},
            {id: '004', name: '撸串', done: false},
        ]
    }

    /**
     * 添加一个todo
     *
     * @param todoObj
     */
    addChild = (todoObj) => {
        const {todos} = this.state;
        // 追加todo生成新的数组
        const newTodos = [todoObj, ...todos]
        // 变更值~
        this.setState({todos: newTodos});
    }

    /**
     * 更新一个todo
     * 根据id更新，done
     *
     * @param todoObj
     */
    updateChild = (id, done) => {
        const {todos} = this.state;
        const newTodos = todos.map((obj) => {
            // id 匹配了以后就替换
            if (obj.id === id) {
                // 复制一个新的obj，并且替换done
                // return {...obj, done: done}
                return {...obj, done}
            } else {
                // 什么也不改
                return obj
            }
        });
        this.setState({todos: newTodos})
    }

    render() {
        const {todos} = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    {/*<Header addChild={123}></Header> 测试propTypes校验*/}
                    <Header addChild={this.addChild}></Header>
                    {/*<List todos={this.state.todos}></List>*/}
                    <List todos={todos} updateTodo={this.updateChild}></List>
                    <Footer></Footer>
                </div>
            </div>
        )
    }
}

// 对外暴露组件
export default App