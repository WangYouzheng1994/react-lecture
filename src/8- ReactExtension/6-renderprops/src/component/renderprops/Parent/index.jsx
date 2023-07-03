import React, {Component} from 'react';

class Parent extends Component {
    state = {"name": '我要给下游的数据'}
    render() {
        const {name} = this.state;
        return (
            <div>
                <h3>我是renderprops/Parent</h3>
                {this.props.render(name)}
            </div>
        );
    }
}

export default Parent;
