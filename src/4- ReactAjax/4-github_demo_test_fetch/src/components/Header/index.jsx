import React, {Component} from 'react';
import axios from 'axios';
import PubSub from 'pubsub-js';


class Header extends Component {

    /**
     * 查询按钮事件
     */
    search = async () => {
        // console.log(this.keyWordElement.value);
        // 常规解构赋值
        // const {value} = this.keyWordElement;
        // 连续解构赋值 可以解构多个this中的变量
        // const {keyWordElement: {value}, } = this;
        // alert(value);
        // 连续解构赋值的 重命名，比如我不想让他用value 要改个名字为inputVal
        // const {updateAppState} = this.props;
        const {keyWordElement: {value: inputVal}, props: {updateAppState}}= this;

        // updateAppState({isFirst: false, isLoading: true});
        PubSub.publish("UpdateList", {isFirst: false, isLoading: true})
        // 为什么这里不跨域？因为GIthub的后端服务器使用了CORS解决了跨域问题
        /*axios.get(`https://api.github.com/search/users?q=${inputVal}`).then(resp => {
            // updateAppState({isLoading: false});
            PubSub.publish("UpdateList", {isLoading: false})
            console.log("成功了", resp.data);
            // this.props.saveUsers(resp.data.items);
            PubSub.publish("UpdateList", {users: resp.data.items})

        }, error => {
            // updateAppState({isLoading: false, errorMsg: error.message});
            PubSub.publish("UpdateList", {isLoading: false, errorMsg: error.message})
            console.error("异常了", error)
        })*/

        // Fetch进行请求的发送，具体的每个版本查看readme.md文档
        PubSub.publish("UpdateList", {isLoading: true})
        try {
            const response = await fetch(`https://api.github.com/search/users?q=${inputVal}`);
            const data = await response.json(); // await右边一定要promise
            PubSub.publish("UpdateList", {isLoading: false,users: data.items})
        } catch (error) {
            PubSub.publish("UpdateList", {isLoading: false, errorMsg: error.message})
            console.log("请求出错", error)
        }


    }

    render() {
        return (
            <div className="row p-4 bg-body-secondary">
                <h3>Search Github Users</h3>
                <div className="col-4">
                    {/*使用回调绑定*/}
                    <input ref={c => this.keyWordElement = c} type="text" className="form-control" placeholder="请输入关键字点击搜索"/>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-secondary mb-3" onClick={this.search}>Search</button>
                </div>
            </div>
        )
    }
}

export default Header;
