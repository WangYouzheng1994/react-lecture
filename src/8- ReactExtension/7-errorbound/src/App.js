import React, {Component} from 'react';
import Parent from "./component/Parent";
import Child from "./component/Child";

class App extends Component {
    render() {
        return (
            <div>
                <Parent><Child>啦啦啦我是儿子的内容哈</Child></Parent>
            </div>
        );
    }
}

export default App;
