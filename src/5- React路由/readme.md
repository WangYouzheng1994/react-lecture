### 单页面应用（SPA）
> https://blog.csdn.net/weixin_44337386/article/details/125292569

* 局部刷新
* Hash模式
* 难以进行SEO，仅能使用SSR改善

### 使用React Router进行SPA的局部刷新跳转
* SPA是基于BOM History栈来的。
* 常见的是使用官方的React-Router-Dom
```
pnpm install react-router-dom
```
* 通过比对html源码 发现切换其实就是一种动态的切换dom节点。 他的效果其实和传统的iframe还是有区别的。但是看起来很像而已~

### 路由组件和非路由组件的区别
1. 存放位置不同
* 一般组件 components
* 路由组件 pages
2. 接收到的props不同
* 一般组件 在组件的调用的时候传参，传什么，组件就能拿到什么
* 路由组件 
  * v5接收到三个固定属性
    * history
    * location
    * match
  * v6 在函数式组件利用钩子获取对应的值
    * useParams()
    * useLocation()
### 路由有两种模式
1. 浏览器历史模式 BrowserRouter
* 浏览器的API
* 会留下历史记录，可以前进和后退
* url会发生变化 
- router6.x的使用方式
```jsx
<BrowserRouter>
    <Link className="list-group-item" to="/about">About</Link>
    <Link className="list-group-item" to="/home">Home</Link>
    <Routes>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
    </Routes>
</BrowserRouter>
```
- router5.x的使用方式
```jsx
<BrowserRouter>
    <Link className="list-group-item" to="/about">About</Link>
    <Link className="list-group-item" to="/home">Home</Link>

    <Route path="/about" component={About}></Route>
    <Route path="/home" component={Home}></Route>
</BrowserRouter>
```

2. hash模式 HashRouter
* url会有一个#号，并且井号后面的数据不会传递给后台（#的约定意义: 锚点，hash前端资源）
* 不会有历史记录 注意（他只是默认用了replace模式）
- router6.x的使用方式
```jsx
<BrowserRouter>
    <Link className="list-group-item" to="/about">About</Link>
    <Link className="list-group-item" to="/home">Home</Link>
    <Routes>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
    </Routes>
</BrowserRouter>
```

3. 总结
* Router不可以嵌套
* 应该考虑把browserRouter和hashRouter直接放到 index.js 包裹<App/>
* Link 会被渲染成 a标签html

### NavLink和Link
1. 两者都是用以跳转路由用的
2. navlink会进行高亮配合activeClassname
### 标签体内容
1. 标签体内容其实是作为children属性传递给了props，
因此对于自定义重构标签需要标签体的内容的时候，可以直接获取children属性即可，详情参考MyNavLInk


### switch标签
- 当link跳转后，会对routes中的route进行匹配，如果我们出现了一个link的to匹配到了多个route的path，那么就会从头匹配到底部。
使用switch 包裹，出现第一个匹配到的route就终止匹配

* 5.0写法，包裹到Route外部
```
<BrowserRouter>
    <Link className="list-group-item" to="/about">About</Link>
    <Link className="list-group-item" to="/home">Home</Link>
    <Switch>
        <Route path="/about" component={About}></Route>
        <Route path="/home" component={Home}></Route>
    </Switch>
</BrowserRouter>
```

* 6.0 写法： 6.x 已经取消Switch了哈~包裹到Routes外部，自动按照匹配的第一个
```
  <Routes>

    {/*5.x写法*/}
    {/*<Route path="/about" component={About}></Route>
                      <Route path="/home" component={Home}></Route>*/}
    {/* 6.x   */}
    <Route path="/about" element={<About abc={"abc"}/>}></Route>
    <Route path="/home" element={<Home/>}></Route>

  </Routes>
```
### 样式的丢失问题
场景；当history路由进行过跳转，修改了url。然后进行页面刷新，这个时候样式丢失。
通过分析 network资源的加载，发现css的路径请求有问题。
原因：css引入使用了./这种相对路径，正常的web应用应该和jsp一样，需要用根路径来进行渲染的。

- 解决方案1： 使用hashrouter，即使跳转，因为url的# 那么再次刷新给css的时候不会发生跳转.
- 解决方案2： 使用/根路径，这个根路径就是public目录
- 解决方案3： 使用 %PUBLIC_URL% 变量，他其实和javaweb的webroot道理一样，用的是网站根路径~

### 路由的模糊和精准匹配
* v5默认都是模糊匹配，使用exact属性即开启严格匹配，即：
```jsx
<Link to="/abc/a">1</Link>
// 能匹配上
<Route path="/abc" />
// 不能匹配上
<Route exact path="/abc" />
// 不能匹配上
<Route exact={true} path="/abc" />
```

* v6默认是精准匹配
```jsx
<Routes>
    <Route path="/about" element={<About/>}></Route>
    // 模糊匹配
    <Route path="/home/*" ex element={<Home/>}></Route>
</Routes>
```

### router 5.x Redirect重定向到默认路由
* 使用Redirect解决Link要跳转的路径没有任何匹配的时候，再重定向一个Route地址
```
<Switch>
    <Route path='/about' component={About} />
    <Route path='/home' component={Home} />
    <Redirect to='/about' /> {/* 兜底 如果没有匹配的直接跳转到/about */} 
</Switch>
————————————————
版权声明：本文为CSDN博主「纯纯的小白」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_30769437/article/details/128097582
```
### router 6.x 取消掉Redirect以后的解决方案
```jsx
<Routes>
    {/* react-router-dom v6的实现方式1 */}
    {/*<Route path="*" element={<Home/>}></Route>*/}
    {/* react-router-dom v6的实现方式2 */}
    <Route path="*" element={<Navigate to="/about" />}/>
{/*  注意 这里的Navigate to 等价于 Link to，二级路由的默认匹配要注意一下  */}
</Routes>
```

### Router5.x 嵌套路由
* v5:需要写父级路由，如/home/news
```jsx
// 二级页面如下：
<Link to="/home/news"></Link>
<Link to="/home/message"></Link>

<Switch>
    <Route path="/home/news" component={News}></Route>
    <Route path="/home/message" component={Message}></Route>
</Switch>

// 切记，v5 默认是模糊匹配，如果要实现二级嵌套路由，不要开启exact精准模式
```
### Router6.x 嵌套路由
* v6:不写父级路由，如news
```jsx
// 二级页面如下：
<NavLink className="nav-link" to="/home/news">News</NavLink>
<NavLink className="nav-link" to="/home/message">Message</NavLink>

<Routes>
    <Route path="/news" element={<News abc={"abc"}/>}></Route>
    <Route path="/message" element={<Message abc={"abc"}/>}></Route>
    <Route path="*" element={<Navigate to="/home/news" />}/>
</Routes>
```
> 嵌套路由分析，当外层注册的时候，无论是v5还是v6必须设为模糊匹配，假设点击的链接是/home/news，  
> 那么会先匹配到父级的/home，随后，匹配到了二级页面中的<Routes>中的对应的news，  
> v5和v6的区别是，v6的父路由要用/*开启模糊匹配，并且二级路由中不需要写父路由了，直接写/news；
> 但是v5需要带着父路由，如/home/news


#### 关于React Router 5.x和6.x的重定向与嵌套路由以及精准模糊匹配的总结
https://blog.csdn.net/qq_44850230/article/details/125252546

---

3-react_router_params
---
### ReactRouter传参
- params参数 简单参数
* v5 版本：
```
// 携带参数
<Link to='/a/b/Tom/18'></Link>
// 路由器注册声明
<Route path='/a/b/c/:name/:age' element={<User/>}>
// 接收参数
User中使用Props接收
const {name, age} = this.props.match.params;
```
* v6版本：
```jsx
// 携带参数
<Link to='/a/b/Tom/18'></Link>
// 路由器注册声明
<Route path='/a/b/c/:name/:age' element={<User/>}>

// 引入钩子
import {useParams} from "react-router-dom";
// 使用函数式组件
export default function Detail(props) {
    // const {children} = props;
    console.log("props", props);
    console.log("params", useParams());
    // console.log("location", useLocation());
    // 使用钩子接收params参数
    const {id, title} = useParams();
    const findResult = DetailData.find((detailObj)=>{
        return detailObj.id === id;
    });
    return (
        <div>
            <ul>
                <li>id: {id}</li>
                <li>title: {title}</li>
                <li>content: {findResult.content}</li>
            </ul>
        </div>
    );
}


```


- search参数 简单参数，不用声明接收~ 就是urlencoded格式
> 需要安装一个包`pnpm add querystring`，这个包可以实现urlencoded的互转~
* v5版本：
```
import React, {Component} from "react";
import qs from 'querystring';

export default class Detail extends Component {
    render() {
        /!*console.log(this);
        console.log("啦啦", this.props);*!/
        // 接收 search参数
        const {search} = this.props.location;
        // 使用qs格式化urlencoded格式的search数据
        const {id, title} = qs.parse(search.slice(1));
        const findResult = DetailData.find((detailObj)=>{
            return detailObj.id === id;
        });
        return (
            <div>
                <ul>
                    <li>id: {id}</li>
                    <li>title: {title}</li>
                    <li>content: {findResult.content}</li>
                </ul>
            </div>
        );
    }
}

```
* v6版本：使用function组件+hooks
```
import React, {Component} from "react";
import {useParams, useLocation, useSearchParams} from "react-router-dom";
import qs from 'querystring';

export default function Detail(props) {
    // const {children} = props;
    console.log("props", props);
    console.log("params", useParams());
    console.log("location", useLocation());
    // 使用钩子接收search参数，并且配合querystring进行格式化数据
    console.log("parse", qs.parse((useLocation().search).slice(1)));
    const {id,title} = qs.parse((useLocation().search).slice(1));
     // 这种写法相当于把useSerachParams数组的第一个值结构拿出，并改成params
    // const [params] = useSearchParams();
    // console.log("useSearchParams", params.get("id")); // 获取search中的id参数
    const findResult = DetailData.find((detailObj)=>{
        return detailObj.id === id;
    });
    return (
        <div>
            <ul>
                <li>id: {id}</li>
                <li>title: {title}</li>
                <li>content: {findResult.content}</li>
            </ul>
        </div>
    );
}
```

- state参数 复杂参数
* v5版本：
```jsx
{/*state的方式V5版本的传参，传递的是一个对象，其中路由地址为pathname*/}
<Link to={{pathname:`/home/message/detail`, state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>
import React, {Component} from "react";

export default class Detail extends Component {
    render() {
        // 接收 state参数，使用短路或增加容错，避免缓存清空后页面报错了
        const {id, title} = this.props.location.state || {};

        // 使用短路或增加容错，避免缓存清空后页面报错了
        const findResult = DetailData.find((detailObj)=>{
            return detailObj.id === id;
        }) || {};
        return (
            <div>
                <ul>
                    <li>id: {id}</li>
                    <li>title: {title}</li>
                    <li>content: {findResult.content}</li>
                </ul>
            </div>
        );
    }
}
```
* v6版本： function组件+hooks
```jsx
{/*state的方式v6版本的传参，to还是一个纯粹的路由地址，Link组件单独接收state*/}
<Link to={`/home/message/detail`} state={{id:msgObj.id,title:msgObj.title}}>{msgObj.title}</Link>

import React, {Component} from "react";
import {useParams, useLocation, useSearchParams} from "react-router-dom";
export default function Detail(props) {
    // const {children} = props;
    console.log("props", props);
    console.log("params", useParams());
    console.log("location", useLocation());
    console.log("location", useSearchParams());
    // 获取接收state参数
    const {id, title} = useLocation().state || {};
    const findResult = DetailData.find((detailObj) => {
        return detailObj.id === id;
    }) || {};
    return (
        <div>
            <ul>
                <li>id: {id}</li>
                <li>title: {title}</li>
                <li>content: {findResult.content}</li>
            </ul>
        </div>
    );
}

```

- params、search、state三种参数总结

>  https://www.cnblogs.com/wwp666/p/15977149.html  
> https://blog.csdn.net/D_ttxd/article/details/123342450


1. params、search使用字符串的方式传参，并且在url体现。state不体现
2. state是基于缓存的方式传递，因此如果浏览器清空缓存的话，传参会失效。 

---

4-react-router-programming

### React的路由模式
* push 默认模式
- v5：
```jsx
// 默认就是push
<Link to='/abc/a'/>
```
- v6:
```jsx
// 默认就是push
<Link to='/abc/a'/>
```
---

* replace 模式，不会留下痕迹，没有前进和后退~~ 因为不压栈啊，直接变更了。history中只有一条~
- v6:
```jsx
<Link replace={true} to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
// 简写
<Link replace to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
```
- v5:
```jsx
<Link replace to='/abc/a'/>
```
--- 

* 总结push和replace
1. state传参默认是使用replace的

### 编程式路由
* 没有link，不需要点击触发的。

- replace
1. params
2. search
3. state

- push
1. params
2. search
3. state
