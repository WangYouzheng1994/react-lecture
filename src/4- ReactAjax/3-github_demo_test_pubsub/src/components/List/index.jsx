import React, {Component} from 'react';
import PubSub from 'pubsub-js';

class List extends Component {
    state = {users:[], isFirst: true, isLoading: false, errorMsg: ""}

    componentDidMount() {
        // 频道/主题， 事件回调
        this.token = PubSub.subscribe('UpdateList', (_, stateObj) => {
            this.setState(stateObj);
        })
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token);
    }

    render() {
        const {isLoading, isFirst, errorMsg} = this.state;


        return (
            <div className="row row-cols-lg-4 row-cols-md-2 g-4 mt-1 ">
                {
                    isFirst ? <h4>欢迎使用，请输入关键字</h4> :
                    isLoading ? <h2>加载中...</h2> :
                    errorMsg ? <h3 style={{color:'red'}}>{errorMsg}</h3> :
                    this.state.users.map((user, index) => {
                        return (
                            <div className="card text-center ">
                                <a className="card-link " href={user.html_url}>
                                    <img className="img-thumbnail " style={{"width": "100px"}} alt="avater"
                                         src={user.avatar_url}/>
                                </a>
                                <div className="card-body">
                                    <p className="card-text">{user.login}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default List;
