import React, {Component} from 'react';
import News from './News'
import Message from './Message'
import {NavLink, Link, Route,Switch, Redirect } from "react-router-dom";

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
                    <Switch>
                        <Route path="/home/news" component={News}></Route>
                        <Route path="/home/message" component={Message}></Route>
                        {/*<Route path="*" element={<Navigate to="/home/news" />}/>*/}
                        <Redirect to='/home/news' /> {/* 兜底 如果没有匹配的直接跳转到/about */}
                    </Switch>
                </div>
            </div>

        )
    }
}

export default Home;
