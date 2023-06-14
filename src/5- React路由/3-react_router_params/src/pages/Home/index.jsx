import React, {Component} from 'react';
import News from './News'
import Message from './Message'
import {NavLink, Link, Route, Routes, Navigate} from "react-router-dom";

class Home extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h3>我是home</h3>
                <div>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            {/*<a className="nav-link">News</a>*/}
                            <NavLink className="nav-link" to="/home/news">News</NavLink>
                        </li>
                        <li className="nav-item">
                            {/*<a className="nav-link">Message</a>*/}
                            <NavLink className="nav-link" to="/home/message">Message</NavLink>
                        </li>
                    </ul>
                    {/*注册路由*/}
                    {/*<News/>*/}
                    {/*<Message/>*/}
                    <Routes>
                        <Route path="/news" element={<News/>}></Route>
                        <Route path="/message/*" element={<Message/>}></Route>
                        <Route path="*" element={<Navigate to="/home/news" />}/>
                    </Routes>
                </div>
            </div>

        )
    }
}

export default Home;
