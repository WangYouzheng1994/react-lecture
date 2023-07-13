import React from 'react';
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import Message from './Message';
import News from './News';

const Home = () => {
    return (
        <div>
            <h3>我是Home</h3>
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
            <Routes>
                <Route path="/news" element={<News/>}></Route>
                <Route path="/message/*" element={<Message/>}></Route>
                {/*<Route path="*" element={<Navigate to="/home/news" />}/>*/}
            </Routes>
        </div>
    );
};

export default Home;
