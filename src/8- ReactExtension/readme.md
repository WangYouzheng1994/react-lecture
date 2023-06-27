### setState v5 
1. 对象+回调
```jsx

this.setState({count: count+value*1}, function () {
            console.log("回调：我更新成功了哈~", this.state.count)
})

```
2. 函数+回调函数，简化了手动获取state或者props
```jsx
this.setState((state, props) => {
    return {count: state.count+1}
}, () => {
    console.log("函数 + 回调函数：我更新成功了哈~", this.state.count)
})
```

3. 函数 + 回调函数 简写
```jsx
this.setState((state) => ({count: state.count+1}))
```

> 新状态不依赖原状态，直接用对象。依赖原状态或者依赖props参数，那么用函数式

---

### lazyLoad
> 路由懒加载

> PS: v6版本扒拉了老半天的文档，写的一坨稀泥。。
http://www.reactrouter.cn/
* v5
```jsx
import React, {Component, lazy} from 'react'
import {BrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom";
// import About from "./component/About";
// import Home from "./component/Home";

const About = lazy(() => import('./component/About'));
const Home = lazy(() => import('./component/Home'));
<React.Suspense fallback={<>...</>}>
    <Route path="/about" component={About}></Route>
    <Route path="/home" component={Home}></Route>
</React.Suspense>
```

* v6
```jsx
import React, {Component, lazy} from 'react'
import {BrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom";
// import About from "./component/About";
// import Home from "./component/Home";

const About = lazy(() => import('./component/About'));
const Home = lazy(() => import('./component/Home'));

<React.Suspense fallback={<>全局的哈</>}>
    <Routes>
        {/* 6.x */}
        <Route path="/about" element={
            <React.Suspense fallback={<>...</>}>
                <About/>
            </React.Suspense>
        }/>
        <Route path="/home"
               element={
                   <React.Suspense fallback={<>..123.</>}>
                       <Home/>
                   </React.Suspense>
               }
        />
    </Routes>
</React.Suspense>
```
