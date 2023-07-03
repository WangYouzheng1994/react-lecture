import React, {Component} from 'react';

class Child extends Component {
    render() {
        return (
            <div>
                <h2>我是组件Child</h2>
                {this.state.llll}
                {this.props.children}
            </div>
        );
    }
}

export default Child;
