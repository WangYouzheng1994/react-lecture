import React from 'react';
import Parent from "./component/Parent";
import Child from "./component/Child";

class App extends React.PureComponent {
    render() {
        return (
            <Parent><Child>123123</Child></Parent>
        )
    }
}

export default App;
