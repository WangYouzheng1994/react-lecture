import React, { useState } from 'react'
import Detail from './Detail'
import {Link, Route, Routes, useLocation, useNavigate} from 'react-router-dom'

/**
 * 重构原因，v6 router需要使用钩子
 *
 * @param props
 * @param b
 * @constructor
 */
export default function Message(props) {
/*    state = {
        messageArr: [
            {id: '01', title: '消息1'},
            {id: '02', title: '消息2'},
            {id: '03', title: '消息5555'},
        ]
    }*/

    /**
     * 用钩子设置state
     */
    const [messageArr] = useState([
        {id: '01', title: '消息1'},
        {id: '02', title: '消息2'},
        {id: '03', title: '消息5555'},
    ])

    /**
     * replace路由 v6 使用useNavigate
     *
     * //https://blog.csdn.net/weixin_46360938/article/details/126747219
     */
   function replaceRouter(id, title)  {
        useNavigate(`/home/message/detail/${id}/${title}`, {replace: true})
    }


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
                                {/*<Link to={`/home/message/detail?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>*/}
                                {/*state的方式V5版本的传参，传递的是一个对象，其中路由地址为pathname*/}
                                {/*<Link to={{pathname:`/home/message/detail`, state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>*/}
                                {/*state的方式v6版本的传参，to还是一个纯粹的路由地址，Link组件单独接收state*/}
                                <Link to={`/home/message/detail`}
                                      state={{id: msgObj.id, title: msgObj.title}}>{msgObj.title}</Link>
                                {/*<button onClick={}>push查看</button>*/}
                                <button onClick={() => replaceRouter(msgObj.id, msgObj.title)}>replace查看</button>
                            </li>
                        );
                    })
                }
            </ul>
            {/*切记，如果要写js代码 必须要用花括号括起来 <ul><li>{messageArr.length}</li></ul>*/}
            <hr/>
            {/*<Detail/>*/}
            <Routes>
                {/*无参数声明*/}
                {/*<Route path="/detail" element={<Detail/>}></Route>*/}
                {/*声明接收params参数*/}
                {/*<Route path="/detail/:id/:title" element={<Detail/>}></Route>*/}
                {/*search参数无需声明*/}
                {/*<Route path="/detail" element={<Detail/>}></Route>*/}
                {/*state参数无需声明*/}
                <Route path="/detail" element={<Detail/>}></Route>
            </Routes>
        </div>
    )
}
