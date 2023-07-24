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
#### params
#### states
