import React, {Component} from 'react';
import Parent from "../Parent";

class Grand extends Component {
    render() {
        return (
            <div className="grand">
                你好，我是grand
                <Parent/>
            </div>
        )
    }
}

export default Grand;
