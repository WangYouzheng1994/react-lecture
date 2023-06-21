import React, {Component} from 'react'
//引入的是容器组件
import Count from "./containers/Count";
import store from './redux/store';


class App extends Component {
  render() {
    return (
        <div>
          {/*  给容器组件传递store*/}
          <Count store={store}/>
        </div>
    )
  }
}

export default App;

