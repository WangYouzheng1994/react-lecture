import React, {Component} from 'react'
//引入的是容器组件
import Count from "./containers/Count";
// import store from './redux/store'; 使用react-redux 中的provider 可以不用显式的注入store给容器组件了


class App extends Component {
  render() {
    return (
        <div>
          {/*  给容器组件传递store*/}
          {/*<Count store={store}/>*/}
            <Count/>
        </div>
    )
  }
}

export default App;

