import React, {Component} from 'react';

class Parent extends Component {
    state = {"haserror": false};
    /**
     * 当子组件出现报错的时候会进到这个方法
     * @param error
     */
    static getDerivedStateFromError(error) {
        console.error("######@@@@@@@", error);
        return {
            "haserror": true
        }
    }

    render() {
        return (
            <div>
                <h2>我是Parent</h2>
                {this.state.haserror ? "页面有点毛病哈" : this.props.children}
            </div>
        );
    }
}

export default Parent;
