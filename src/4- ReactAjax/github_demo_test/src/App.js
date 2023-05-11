// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import Header from './components/Header'
import List from './components/List'


class App extends React.Component {

    render() {
        return (
            <div className="container">
                <Header></Header>
                <List></List>
            </div>
        )
    }
}

export default App;
