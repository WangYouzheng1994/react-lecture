// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import Header from './components/Header'
import List from './components/List'


class App extends React.Component {
    state = {users:[], isFirst: true, isLoading: false}

    /**
     * 保存用户列表
     *
     * @param users
     */
    saveUsers = (users) => {
        this.setState({users: users})
    }

    /**
     * 刷新状态
     *
     * @param state
     */
    updateAppState = (state) => {
        this.setState(state);
    }

    render() {
        return (
            <div className="container">
                <Header updateAppState={this.updateAppState} saveUsers = {this.saveUsers}></Header>
                <List users={this.state.users} isLoading={this.state.isLoading}></List>
            </div>
        )
    }
}

export default App;
