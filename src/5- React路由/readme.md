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

### 路由有两种模式
1. 浏览器历史模式 BrowserRouter
* 浏览器的API
* 会留下历史记录，可以前进和后退
* url会发生变化 
- router6.x的使用方式
```js
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
```js
<BrowserRouter>
    <Link className="list-group-item" to="/about">About</Link>
    <Link className="list-group-item" to="/home">Home</Link>

    <Route path="/about" component={About}></Route>
    <Route path="/home" component={Home}></Route>
</BrowserRouter>
```

2. hash模式 HashRouter
* url会有一个#号，并且井号后面的数据不会传递给后台（约定，锚点，hash前端资源）
* 不会有历史记录
- router6.x的使用方式
```
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

### 标签体内容
1. 标签体内容其实是作为children属性传递给了props，
因此对于自定义重构标签需要标签体的内容的时候，可以直接获取children属性即可，详情参考MyNavLInk


### switch标签
- 当link跳转后，会对routes中的route进行匹配，如果我们出现了一个link的to匹配到了多个route的path，那么就会从头匹配到底部。
使用switch 包裹，出现第一个匹配到的route就终止匹配

* 6.0 写法，包裹到Routes外部。 5.0写法直接包裹Route
```
<switch>
  <Routes>

    {/*5.x写法*/}
    {/*<Route path="/about" component={About}></Route>
                      <Route path="/home" component={Home}></Route>*/}
    {/* 6.x   */}
    <Route path="/about" element={<About abc={"abc"}/>}></Route>
    <Route path="/home" element={<Home/>}></Route>

  </Routes>
</switch>
```
### 样式的丢失问题
场景；当history路由进行过跳转，修改了url。然后进行页面刷新，这个时候样式丢失。
通过分析 network资源的加载，发现css的路径请求有问题。
原因：css引入使用了./这种相对路径，正常的web应用应该和jsp一样，需要用根路径来进行渲染的。

- 解决方案1： 使用hashrouter，即使跳转，因为url的# 那么再次刷新给css的时候不会发生跳转.
- 解决方案2： 使用/根路径，这个根路径就是public目录
- 解决方案3： 使用 %PUBLIC_URL% 变量，他其实和javaweb的webroot道理一样，用的是网站根路径~

### 路由的模糊和精准匹配
* 默认都是模糊匹配，使用exact属性即开启严格匹配，即：
```
<Link to="/abc/a">1</Link>
<Route path="/abc" />能匹配上
<Route exact path="/abc" />不能匹配上
<Route exact={true} path="/abc" />不能匹配上
```

### Redirect重定向到默认路由
* 使用Redirect解决Link要跳转的路径没有任何匹配的时候，再重定向一个Route地址
```
<Redirect to="">
```

### ReactRouter传参
- params参数 简单参数
```
// 携带参数
<Link to='/a/b/Tom/18'></Link>
// 路由器注册声明
<Route path='/a/b/c/:name/:age' element={<User/>}>
// 接收参数
User中使用Props接收
const {name, age} = this.props.match.params;
```

- search参数 简单参数，不用声明接收~
```

```

- state参数 复杂参数
```

```

### React的路由模式
* push 默认模式
* replace 模式，不会留下痕迹，没有前进和后退~~ 因为不压栈啊，直接变更了。history中只有一条~

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
