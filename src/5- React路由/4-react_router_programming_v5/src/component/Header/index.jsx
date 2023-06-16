import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'


class Header extends Component {
    /**
     *
     */
    back = () => {
        this.props.history.goBack();
    }

    /**
     * 前进
     */
    forward = () => {
        this.props.history.goForward();
    }

    /**
     * 后退两步
     */
    go = () => {
        this.props.history.go(-2);
    }

    render() {
        return (
            <header className="pb-3 mb-4 mt-2 border-bottom"><h1>React Router Demo</h1>
                <button onClick={this.back}>回推</button>
                <button onClick={this.forward}>前进</button>
                <button onClick={this.go}>go</button>
            </header>
        )
    }
}

// 使用WithRouter把一般组件的props加上路由组件的api
export default withRouter(Header)
