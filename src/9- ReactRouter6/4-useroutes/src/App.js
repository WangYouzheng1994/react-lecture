import React from 'react';
import {NavLink, Route, Routes, Navigate, useRoutes} from "react-router-dom";
import routes from './routes'
import About from "./pages/About";
import Home from "./pages/Home";
import Demo from "./pages/Demo";

function App(props) {
    /*  const element = useRoutes([
          {
              path: '/about',
              element:<About/>
          },
          {
              path: '/home',
              element:<Home/>
          },
          {
              path: '/',
              element: <Navigate to='/about'/>
          }
      ])*/
    const element = useRoutes(routes);
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
                            {element}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
