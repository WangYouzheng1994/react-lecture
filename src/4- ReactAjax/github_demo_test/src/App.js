// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import Header from './components/Header'
import List from './components/List'


class App extends React.Component {
    state = {users:[]}

    saveUsers = (users) => {
        this.setState({users: users})
    }

    render() {
        return (
            <div className="container">
                <Header saveUsers = {this.saveUsers}></Header>
                <List users={this.state.users}></List>
            </div>
        )
    }
}

export default App;
