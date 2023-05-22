import React from 'react'
import {Link} from 'react-router-dom'


class App extends React.Component {
  // state = {users:[], isFirst: true, isLoading: false, errorMsg: ""}

  render() {
    return (
        <div className="container">
          <div className="row">
            <header className="pb-3 mb-4 mt-2 border-bottom"><h1>React Router Demo</h1></header>
          </div>
          <div className="row ">
            <div className="col-md-2">
              <ul className="list-group">
                {/* 原生的页面是通过a标签的url进行跳转的，他不是一种局部的刷新 */}
                <li className="list-group-item active" aria-current="true"><a href="base_static_about.html">about</a></li>
                <li className="list-group-item"><a href="base_static_home.html">home</a></li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
              </ul>
            </div>

            <div className="col-md-10">
              A
            </div>
          </div>
        </div>
    )
  }
}

export default App;
