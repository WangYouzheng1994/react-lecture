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
    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header></Header>
                    <List></List>
                    <Footer></Footer>
                </div>
            </div>
        )
    }
}

// 对外暴露组件
export default App