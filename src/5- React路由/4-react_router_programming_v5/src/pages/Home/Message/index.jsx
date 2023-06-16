import React, {Component} from 'react'
import Detail from './Detail'
import {Link, Route, Switch} from 'react-router-dom'

export default class Message extends Component {
    state = {
        messageArr: [
            {id: '01', title: '消息1'},
            {id: '02', title: '消息2'},
            {id: '03', title: '消息5555'},
        ]
    }

    /**
     * replace路由 v5
     */
    replaceRouter = (id, title)  =>  {
        // replace跳轉+ param參數
        // this.props.history.replace(`/home/message/detail/${id}/${title}`)

        // replace跳轉+ search參數
        this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

        // replace跳轉 携帶state
        // this.props.history.replace(`/home/message/detail}`, {id, title})
    }

    /**
     * push路由 v5
     * @param id
     * @param title
     */
    pushShow = (id, title) => {
        // push跳轉+ param參數
        this.props.history.push(`/home/message/detail/${id}/${title}`)

        // push跳轉+ search參數
        this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)

        // push跳轉 携帶state
        this.props.history.push(`/home/message/detail}`, {id, title})
    }

    /**
     *
     */
    back = () => {
        this.props.history.goBack();
    }

    /**
     * 前进
     */
    forward = () =>  {
        this.props.history.goForward();
    }

    /**
     * 后退两步
     */
    go = () =>  {
        this.props.history.go(-2);
    }

    render() {
        let {messageArr} = this.state;
        return (
            <div>
                <ul>
                    {
                        /*<li>
                            <a>message001</a>
                        </li>
                        <li>
                            <a>message002</a>
                        </li>
                        <li>
                            <a>message003</a>
                        </li>*/
                        messageArr.map((msgObj) => {
                            return (
                                <li key={msgObj.id}>
                                    {/*<a>{msgObj.title}</a>*/}
                                    {/*<Link to="/home/message/detail">{msgObj.title}</Link>*/}
                                    {/*params的方式传参*/}
                                    {/*<Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>*/}
                                    {/*search的方式传参*/}
                                    <Link to={`/home/message/detail?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>
                                    {/*state的方式V5版本的传参，传递的是一个对象，其中路由地址为pathname*/}
                                    {/*<Link to={{pathname:`/home/message/detail`, state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>*/}
                                    {/*state的方式v6版本的传参，to还是一个纯粹的路由地址，Link组件单独接收state*/}
                                    {/*<Link to={`/home/message/detail`} state={{id:msgObj.id,title:msgObj.title}}>{msgObj.title}</Link>*/}
                                    {/*<button onClick={}>push查看</button>*/}
                                    <button onClick={() => this.replaceRouter(msgObj.id, msgObj.title)}>replace查看</button>
                                </li>
                            );
                        })
                    }
                </ul>
                {/*切记，如果要写js代码 必须要用花括号括起来 <ul><li>{messageArr.length}</li></ul>*/}
                <hr/>
                {/*<Detail/>*/}
                <Switch>
                    {/*无参数声明*/}
                    {/*<Route path="/detail" component={Detail}></Route>*/}
                    {/*声明接收params参数*/}
                    {/*<Route path="/home/message/detail/:id/:title" component={Detail}></Route>*/}
                    {/*search参数无需声明*/}
                    <Route path="/home/message/detail" component={Detail}></Route>
                    {/*state参数无需声明*/}
                    {/*<Route replace={false} path="/home/message/detail" component={Detail}></Route>*/}
                </Switch>
                {/*<button onClick={this.back}>回推</button>
                <button onClick={this.forward}>前进</button>
                <button onClick={this.go}>go</button>*/}
            </div>
        )
    }
}


