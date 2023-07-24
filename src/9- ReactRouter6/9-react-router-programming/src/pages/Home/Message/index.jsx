import React, {useState} from 'react';
import {Link, Outlet, useNavigate} from 'react-router-dom'

const Message = () => {
    const [messages] = useState([
        {id: '001', title: '消息1', content: '001消息'},
        {id: '002', title: '消息2', content: '002消息'},
        {id: '003', title: '消息3', content: '003消息'},
        {id: '004', title: '消息4', content: '004消息'},
    ])
    const navigate = useNavigate();

    function showDetails(m) {
        navigate("detail", {
            replace: false,
            state: {
                id: m.id,
                title: m.title,
                content: m.content
            }
        });
    }

    return (
        <div>
            <ul>
                {/*<li>
                    <a href="#">message001</a>
                </li>
                <li>
                    <a href="#">message002</a>
                </li>
                <li>
                    <a href="#">message003</a>
                </li>*/}
                {
                    messages.map((m) => {
                        // 函数体
                        return (
                            <li key={m.id}>
                                {/*<a href="#">{m.title}</a>*/}
                                {/*完整路径写法*/}
                                {/*<Link to={`/home/message/detail`} state={{
                                    id:m.id,
                                    title:m.title,
                                    content:m.content
                                }}>{m.title}</Link>*/}
                                {/*相对路径写法：写对的是当前路由*/}
                                <Link to={`detail`} state={{
                                    id: m.id,
                                    title: m.title,
                                    content: m.content
                                }}>{m.title}</Link>
                                <button onClick={() => {showDetails(m)}}>路由编程查看详情</button>
                            </li>
                        )
                    })
                }
                <hr/>
                <Outlet/>
            </ul>
        </div>
    );
};

export default Message;
