import React, {Component} from 'react'
//引入的是容器组件
import Count from "./containers/Count";
import Person from "./containers/Person";

class App extends Component {
    render() {
        return (
            <div>
                <Count/>
                <hr/>
                <Person/>
            </div>
        )
    }
}

export default App;

