import React from 'react';
import {NavLink, Route, Routes, Navigate} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Demo from "./pages/Demo";

function App(props) {
    return (
        <div className="container">
            <div className="row">
                <header className="pb-3 mb-4 mt-2 border-bottom"><h1>React Router Demo</h1></header>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <ul className="list-group">
                        {/*路由链接*/}
                        <NavLink className="list-group-item" to="/about">About</NavLink>
                        <NavLink className="list-group-item" to="/home">Home</NavLink>
                    </ul>
                </div>
                <div className="col-md-10">
                    <div className="panel">
                        {/* 注册路由的 展示区，path对应了link的to，component对应了路由的组件 */}
                        <div className="panel-body">
                            {/*  注册路由  */}
                            <Routes>
                                {/*caseSensitive 区分大小写，默认是不区分的*/}
                                <Route path="/ABOUT" caseSensitive element={<About/>}/>
                                <Route path="/about" element={<About/>}/>
                                {/*可以看到demo没展示，这就是匹配到一个不会继续往下，相当于Swtich的作用*/}
                                <Route path="/about" element={<Demo/>}/>
                                <Route path="/home" element={<Home/>}/>
                                {/*使用navigate 替代Redirect标签。*/}
                                <Route path="" element={<Navigate to="/about"/>}/>
                            </Routes>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;
