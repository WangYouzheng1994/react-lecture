import React from 'react'
import MyNavLink from "./component/MyNavLink";
import {Route, Switch} from "react-router-dom";
import About from './pages/About'
import Home from './pages/Home'
import Header from './component/Header'
class App extends React.Component {
  // state = {users:[], isFirst: true, isLoading: false, errorMsg: ""}

  render() {
    return (
        <div className="container">
          <div className="row">
              <Header/>
          </div>
          <div className="row">
            <div className="col-md-2">
              <ul className="list-group">
                <MyNavLink to="/about">About_MyNav</MyNavLink>
                <MyNavLink to="/home">Home_MyNav</MyNavLink>
              </ul>
            </div>

            <div className="col-md-10">
              <div className="panel">
                {/* 注册路由的 展示区，path对应了link的to，component对应了路由的组件 */}
                <div className="panel-body">
                  {/*<Switch>*/}
                  <Switch>

                    {/*5.x写法*/}
                    {/*<Route path="/about" component={About}></Route>
                                          <Route path="/home" component={Home}></Route>*/}
                    <Route path="/about" component={About}></Route>
                    <Route path="/home" component={Home}></Route>

                  </Switch>
                  {/*</Switch>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default App;
