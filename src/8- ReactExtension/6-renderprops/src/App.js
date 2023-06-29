import React from 'react';
import Parent from "./component/Parent";
import Child from "./component/Child";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Parent>
                    <Child>123</Child>
                </Parent>
            </React.Fragment>
        )
    }
}

export default App;
