import {NavLink, useRoutes} from "react-router-dom";
import routes from "./routes";
import Header from './components/Header'

function App() {
  const element = useRoutes(routes);
  return (
      <div className="container">
        <Header/>
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
