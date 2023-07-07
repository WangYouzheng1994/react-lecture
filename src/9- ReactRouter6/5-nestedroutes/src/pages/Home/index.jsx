import React from 'react';
import {NavLink} from "react-router-dom";

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

        </div>
    );
};

export default Home;
