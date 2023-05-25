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
