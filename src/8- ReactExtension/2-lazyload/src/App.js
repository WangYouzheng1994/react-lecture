import React, {Component, lazy} from 'react'
import {BrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom";
// import About from "./component/About";
// import Home from "./component/Home";

const About = lazy(() => import('./component/About'));
const Home = lazy(() => import('./component/Home'));

class App extends Component {

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
                            </ul>
                        </div>

                        <div className="col-md-10">
                            <div className="panel">
                                {/* 注册路由的 展示区，path对应了link的to，component对应了路由的组件 */}
                                <div className="panel-body">
                                    <React.Suspense fallback={<>全局的哈</>}>
                                        <Routes>
                                            {/*5.x写法*/}
                                            {/*<React.Suspense fallback={<>...</>}>
                                            <Route path="/about" component={About}></Route>
                                            <Route path="/home" component={Home}></Route>
                                            </React.Suspense>*/}
                                            {/* 6.x   */}
                                            <Route path="/about" element={
                                                <React.Suspense fallback={<>...</>}>
                                                    <About/>
                                                </React.Suspense>
                                            }/>
                                            <Route path="/home"
                                                   element={
                                                       <React.Suspense fallback={<>..123.</>}>
                                                       <Home/>
                                                       </React.Suspense>
                                                   }
                                            />
                                        </Routes>
                                    </React.Suspense>
                                </div>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
