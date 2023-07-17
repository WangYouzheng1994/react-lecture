import React from 'react';
import {Navigate, NavLink, Route, Routes, Outlet} from "react-router-dom";
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
                    {/*完整的路径方式*/}
                    {/*<NavLink className="nav-link" to="/home/message">Message</NavLink>*/}
                    {/*相对路径的方式*/}
                    <NavLink className="nav-link" to="message">Message</NavLink>
                </li>
            </ul>
            <Routes>
                {/*<Route path="/news" element={<News/>}></Route>*/}
                {/*<Route path="/message/*" element={<Message/>}></Route>*/}
                {/*<Route path="*" element={<Navigate to="/home/news" />}/>*/}
            </Routes>
            {/*替代指定Routes，*/}
            <Outlet/>
        </div>
    );
};

export default Home;
