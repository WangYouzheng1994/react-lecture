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
---
### Hooks
> 函数式组件，没有实例对象，没有this，低版本（16.8之前）的react的函数式组件原则上来说只能做简单的组件。
> 但是！！！16.8以后，react的hooks加入，啥都能玩儿了~~
#### 1. stateHook
> 让函数拥有state能力

React.useState(initValue);
> 第一次传入的值作为初始化值

```jsx
// React.useState返回一个俩元素的数组，第一个是原来的值，第二个是更新状态的函数
const [count, setCount] = React.useState(0)
// 方式1
setCount(count+1);
// 方式2
setCount(preCount => preCount+1)
```


#### 2. EffectHook


#### 3. RefHook
