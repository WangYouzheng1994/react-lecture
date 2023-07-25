### ReactRouter6
概述：
> 2021年11月发布。  
> `react-router`为核心库，  
> `react-router-dom` 包含了react-router的所有内容添加用于dom的组件，  
> `react-router-native`用以ReactNative的Api  

安装React Router6.0，目前已经是默认版本了
```shell
pnpm add react-router-dom
```

对比react Router5:
1. 移除了<Switch/>、新增了<Routes/>
2. 注册路由变了：component={组件名字} 变更为 element={<组件标签/>}
3. 新增多个hook: useParams、useNavigate、useMatch等
4. 明确推荐使用函数式组件~!!!

### 创建组件的快捷键说明
1. rcc 类式组件
2. rsf function函数式组件，组件接收props参数
3. rsc 箭头函数式组件，组件不接收props

### Router路由组件
```jsx
{/*路由链接*/}
<NavLink className="list-group-item" to="/about">About</NavLink>
<NavLink className="list-group-item" to="/home">Home</NavLink>

{/*  注册路由  */}
<Routes>
    <Route path="/about" element={<About/>}/>
    {/*可以看到demo没展示，这就是匹配到一个不会继续往下，相当于Swtich的作用*/}
    <Route path="/about" element={<Demo/>}/>
    <Route path="/home" element={<Home/>}/>
</Routes>
```

### router6.0 重定向 参见2-routerredirect
> 使用navigate

```jsx
<Routes>
    <Route path="/about" element={<About/>}/>
    {/*可以看到demo没展示，这就是匹配到一个不会继续往下，相当于Swtich的作用*/}
    <Route path="/about" element={<Demo/>}/>
    <Route path="/home" element={<Home/>}/>
    {/*使用navigate 替代Redirect标签。*/}
    <Route path="" element={<Navigate to="/about"/>}/>
</Routes>
```

### NavLink
> NavLink默认在激活的时候 添加`active`的这个className

> 5.0版本可以使用activeClassName针对激活的链接设置自定义class     

`<NavLink activeClassName="aaaaa" className="list-group-item" to="/about">`

* 6.0版本移除了activeClassName，如果要自定义激活的class，需要将className指定为函数
```jsx
{/*路由链接*/}
<NavLink className={({isActive}) => isActive? 'list-group-item wyz' : 'list-group-item'} to="/about">About</NavLink>
```

### useRoutes 详见4-useroutes
> 函数式组件使用useRoutes 生成路由表，可以生成Routes+route的代码

```jsx
const element = useRoutes([
    {
        path: '/about',
        element:<About/>
    },
    {
        path: '/home',
        element:<Home/>
    },
    {
        path: '/',
        element: <Navigate to='/about'/>
    }
])
```
---
项目中更常见的做法是：src/routes/index.js 进行路由表的封装
```jsx
// 封装路由表
import {Navigate} from 'react-router-dom'
import About from "../pages/About";
import Home from "../pages/Home";

export default [
    {
        path: '/about',
        element:<About/>
    },
    {
        path: '/home',
        element:<Home/>
    },
    {
        path: '/',
        element: <Navigate to='/about'/>
    }
]
```

使用时引入
```jsx
const element = useRoutes(routes);

{element}
```

---
### 嵌套路由 详见 5-nestedroutes
1. 使用路由表注册 
routes/index.js
```
// 封装路由表
import {Navigate} from 'react-router-dom'
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/Home/News";
import Message from "../pages/Home/Message";

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
            },
            {
                path: 'news',
                element:<News/>,
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to='/about'/>
    }
]

```

2. 跳转路由的方式
```jsx
<NavLink className="nav-link" to="/home/news">News</NavLink>
{/*完整的路径方式*/}
{/*<NavLink className="nav-link" to="/home/message">Message</NavLink>*/}
{/*相对路径的方式*/}
<NavLink className="nav-link" to="message">Message</NavLink>

```
3. 路由组件的展示
```jsx
// 可以直接使用outlet
// 也可以用<Routes><Router>的方式

<Routes>
    {/*<Route path="/news" element={<News/>}></Route>*/}
    {/*<Route path="/message/*" element={<Message/>}></Route>*/}
    {/*<Route path="*" element={<Navigate to="/home/news" />}/>*/}
</Routes>
{/*替代指定Routes，*/}
<Outlet/>
```

---
### 路由携带参数
#### params 详见 6-router-params
> 使用跳转链接中携带：需要声明路由的占位符。

routes/index.jsx如下所示：
```
path: 'message',
element:<Message/>,
children: [
    {
        path: 'detail/:id/:title/:content',
        element: <Detail/>
    }
]
```
使用携带：
```jsx
{/*完整路径写法*/}
{/*<Link to={`/home/message/detail/${m.id}/${m.title}/${m.content}`}>{m.title}</Link>*/}
{/*相对路径写法：写对的是当前路由*/}
<Link to={`detail/${m.id}/${m.title}/${m.content}`}>{m.title}</Link>
```
useParams钩子，接收路由参数：
```jsx
import {useParams} from 'react-router-dom';

function Detail(props) {
    const {id, title, content} = useParams();
    return (

        <>
            <div>i am detail</div>
            <ul>
                <li>id:{id}</li>
                <li>title:{title}</li>
                <li>content:{content}</li>
            </ul>
        </>

    );
}

export default Detail;
```

#### search 详见 7-router-state
1. 无需在路由表声明占位符
2. 还是需要在url中进行传递 只不过使用的是标准的 ?与&的标准url传参模式

router/index.js
```js
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
}
```

传递参数：
```jsx
{/*完整路径写法*/}
{/*<Link to={`/home/message/detail?id=${m.id}&title=${m.title}&content=${m.content}`}>{m.title}</Link>*/}
{/*相对路径写法：写对的是当前路由*/}
<Link to={`detail?id=${m.id}&title=${m.title}&content=${m.content}`}>{m.title}</Link>
```

使用参数：
```jsx
import React from 'react';
import {useSearchParams} from 'react-router-dom';

function Detail(props) {
    const [search, setSearch] = useSearchParams();
    console.log(search.get('id'));
    return (
        <>
            <div>i am detail</div>
            <ul>
                <li>id:{search.get('id')}</li>
                <li>title:{search.get('title')}</li>
                <li>content:{search.get('content')}</li>
            </ul>
        </>
    );
}

export default Detail;
```


#### location.state 详见8-router-state
1. state参数的路由声明也不需要占位符 
2. 传参比v5简单了，v5是把to转成了对象同时声明路径和state对象，现在v6版本 to还是只有地址，单独分离了state参数


路由表:
```
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

```

传递参数:
```
<li key={m.id}>
    {/*完整路径写法*/}
    {/*<Link to={`/home/message/detail`} state={{
        id:m.id,
        title:m.title,
        content:m.content
    }}>{m.title}</Link>*/}
    {/*相对路径写法：写对的是当前路由*/}
    <Link to={`detail`} state={{
        id:m.id,
        title:m.title,
        content:m.content
    }}>{m.title}</Link>
</li>
```

使用参数:
```
import React from 'react';
import {useLocation} from 'react-router-dom';

function Detail(props) {
    const {state:{id, title, content}} = useLocation();

    return (
        <>
            <div>i am detail</div>
            <ul>
                <li>id:{id}</li>
                <li>title:{title}</li>
                <li>content:{content}</li>
            </ul>
        </>
    );
}

export default Detail;

```
---

### 编程时路由导航 详见9-react-router-programming
1. 使用useNavigate钩子，其不会再细分push，replace等方法了。
2. v5中的withRouter将普通的组件转成路由组件也不复存在了。直接使用钩子。

代码演示：
```jsx
import {Link, Outlet, useNavigate} from 'react-router-dom'

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

/**
 * 后退
 */
function back() {
    navigate(-1)
}

/**
 * 前进
 */
function forward() {
    navigate(1)
}
```

### 其他的路由钩子
* useInRouterContext 显示组件是否是路由的上下文，也就是判定是否被router组件包裹了
* useNavigationType 显示当前页面是怎么导航路由进来的
  - pop：浏览器直接打开的
  - push
  - replace
* useOutlet 呈现当前组件要渲染的嵌套路由，如果嵌套路由还没挂载，那么会返回null
* useResolvedPath 给定一个URL值，解析其中的：path、search、hash
