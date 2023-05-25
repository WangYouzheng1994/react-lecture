import React from 'react'

import {BrowserRouter, HashRouter, Link, NavLink, Route, Routes} from "react-router-dom";
import About from "./pages/About"
import Home from "./pages/Home"
import MyNavLink from "./component/MyNavLink";

class App extends React.Component {
  // state = {users:[], isFirst: true, isLoading: false, errorMsg: ""}

  render() {
    return (
        <div className="container">
          <div className="row">
            <header className="pb-3 mb-4 mt-2 border-bottom"><h1>React Router Demo</h1></header>
          </div>
          <BrowserRouter>
            <div className="row ">
              <div className="col-md-2">
                <ul className="list-group">
                  {/* 原生的页面是通过a标签的url进行跳转的，他不是一种局部的刷新
                                <li className="list-group-item active" aria-current="true"><a
                                    href="base_static_about.html">about</a></li>
                                <li className="list-group-item"><a href="base_static_home.html">home</a></li>
                                <li className="list-group-item">A third item</li>
                                <li className="list-group-item">A fourth item</li>
                                <li className="list-group-item">And a fifth one</li>*/}
                  {/*在React中靠路由链接实现切换组件--编写路由的链接，相当于导航*/}
                  <Link className="list-group-item" to="/about">About</Link>
                  {/*NavLInk 在选中的时候 会增加一个active的class，正好和bootstrap迎合了~*/}
                  <NavLink className="list-group-item" to="/home">Home</NavLink>
                  <NavLink activeClassName="aaaaa" className="list-group-item" to="/about">测试Navlink的自定义className, 5.0版本</NavLink>
                  {/*https://reactrouter.com/en/main/components/nav-link  需要提供一个 function*/}
                  <NavLink className="aaaaa" className="list-group-item" to="/about">测试Navlink的自定义className, 6.0版本</NavLink>

                  <MyNavLink to="/home">哈哈哈哈哈</MyNavLink>
                </ul>
              </div>

              <div className="col-md-10">
                <div className="panel">
                  {/* 注册路由的 展示区，path对应了link的to，component对应了路由的组件 */}
                  <div className="panel-body">
                    <Routes>
                      {/*5.x写法*/}
                      {/*<Route path="/about" component={About}></Route>
                                        <Route path="/home" component={Home}></Route>*/}
                      {/* 6.x   */}
                      <Route path="/about" element={<About abc={"abc"}/>}></Route>
                      <Route path="/home" element={<Home/>}></Route>
                    </Routes>
                  </div>
                </div>
              </div>
            </div>
          </BrowserRouter>

          <HashRouter>
            <div className="row ">
              <div className="col-md-2">
                <ul className="list-group">
                  <Link className="list-group-item" to="/about">About</Link>
                  <Link className="list-group-item" to="/home">Home</Link>
                </ul>
              </div>
              <div className="col-md-10">
                <div className="panel">
                  {/* 注册路由的 展示区，path对应了link的to，component对应了路由的组件 */}
                  <div className="panel-body">
                    <Routes>
                      {/*5.x写法*/}
                      {/*<Route path="/about" component={About}></Route>
                                        <Route path="/home" component={Home}></Route>*/}
                      {/* 6.x   */}
                      <Route path="/about" element={<About/>}></Route>
                      <Route path="/home" element={<Home/>}></Route>
                    </Routes>
                  </div>
                </div>
              </div>
            </div>
          </HashRouter>
        </div>
    )
  }
}

export default App;
