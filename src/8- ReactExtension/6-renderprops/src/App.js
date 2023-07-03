import React from 'react';
import Parent from "./component/Parent";
import Child from "./component/Child";

import Parent_Render from "./component/renderprops/Parent";
import Child_Render from './component/renderprops/Child'

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Parent>
                    <Child>123</Child>
                </Parent>

                <Parent_Render render={(name) => <Child_Render name={name}>AAAAAA</Child_Render>}/>
            </React.Fragment>
        )
    }
}

export default App;
