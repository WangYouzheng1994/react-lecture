// 封装路由表
import {Navigate} from 'react-router-dom'
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/Home/News";
import Message from "../pages/Home/Message";
import Detail from "../pages/Home/Message/Detail"

export default [
    {
        path: '/about',
        element:<About/>
    },
    {
        path: '/home',
        element:<Home/>,
        children: [
            {
                path: 'message',
                element:<Message/>,
                children: [
                    {
                        path: 'detail',
                        element: <Detail/>
                    }
                ]
            },
            {
                path: 'news',
                element:<News/>
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to='/about'/>
    }
]
