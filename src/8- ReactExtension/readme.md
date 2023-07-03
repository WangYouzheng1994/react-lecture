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
> 让函数式组件具备生命周期钩子

React.useEffect(函数, state数组)

1. 组件挂载的钩子componentDidMount，第二个参数 数组为空
```js
    React.useEffect(() => {
        console.log("@@!")
        let timer = setInterval(() => {
            add()
        }, 500)
    }, [])
```
2. 组件更新的钩子componentDidUpdate，第二个参数 指定的state
```js
// 注意，componentDidMount依然会触发~
    React.useEffect(() => {
        console.log("@@!")
        setTimeout(() => {
            add()
        }, 500)
    }, [count])
```

4. 组件卸载的钩子componentWillUnmount，返回的函数
```js
// 注意，componentDidMount、组件更新的钩子componentDidUpdate依然会触发~

    React.useEffect(() => {
        console.log("@@!")
        let timer = setInterval(() => {
            add()
        }, 500)
        return () => {
            clearInterval(timer)
        }
    }, [count])
```

#### 3. RefHook
> 和 React.createRef是一样的
```jsx

const textref = React.useRef();
function show() {
    alert(textref.current.value)
}

<input ref={textref}/>
```
---
### Fragment和空标签
> 为了让代码符合jsx语法，最终编译的时候丢掉

```jsx
import {Fragment} from "react";

<Fragment>
</Fragment>

<>
</>
```
> fragment相对于空标签，fragment可以给属性值~
---
### Context
> props实现父子嵌套组件的通信，context实现祖孙通信

1. 定义context容器对象
```jsx
const xxxContext = React.createContext();

// 给Parent及其子组件 传递了Context，内容为：{username:this.state.username,age:123}
<Provider value={{username:this.state.username,age:123}}>
    <Parent/>
</Provider>
```
2. 声明接收，类组件
```jsx
import MyContext from '../../context/Mycontext'

class Child extends Component {
    // 声明
    static contextType = MyContext;

    render() {
        console.log(this);
        console.log(this.context);
        return (
            <div className="child">
                你好，我是child
                <h4>我从最外层拿到的用户名是：{this.context.username}</h4>
            </div>
        )
    }
}
```
3. 函数式组件的使用~~
```jsx
// 函数式组件，使用<Consumer>标签包裹期望使用context内容的代码
function Child() {
    return (
        <div className="child">
            <MyContext.Consumer>
                {
                    // return <span>返回节点</span>
                    /*value => {
                        // value就是context的值
                        return `${value.username}, 年龄是：${value.age}`
                    }*/
                    // 简写
                    value => `${value.username}, 年龄是：${value.age}`
                }
            </MyContext.Consumer>
        </div>
    )
}
export default Child;
```
---

### 组件优化
> Component的两个不合理的问题：
1. 当父组件产生了修改，触发了render，即使子组件没有使用父组件的数据，子组件也会render
2. 父组件 setState({})，没有操作任何数据，他的组件以及子组件也会render

解决以上触发的低效render行为：具体参见5-purecomponet/component/component
> 借助shouldcomponentupdate钩子，针对即将更新的值进行判定。
```jsx
shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(nextProps);
        console.log(this.props.carName);
        return this.props.carName !== nextProps.carName;
    }

```
> 用生命周期钩子，会发现需要手动的逐一比较，非常麻烦。

##### 高级做法~~，使用PureComponent，
> PureComponent是重写了 shouldComponentUpdate钩子，使用比较算法，
> 但是有个小问题：也不算是问题，说白了就是她是浅比较（引用地址比较），她比较不了对象中的属性变化，
> 因此setState的时候引用类型（数组、对象)必须是新的

---
### Render Props 
> 将标签传入组件，使其具备上下级结构

1. 子组件接收父组件传递的组件中的内容~，子组件使用`this.props.chidren`接收到了
parent.jsx
```jsx
import React, {Component} from 'react';
import Child from "../Child";

class Parent extends Component {
    render() {
        return (
            <div className="parent">
                <h3>我是Parent组件</h3>
                <Child>你好我是parent里面传递的child内容</Child>
            </div>
        );
    }
}

export default Parent;
```

child.jsx
```jsx
import React, {Component} from 'react';

class Child extends Component {
    render() {
        return (
            <div className="child">
                <h3>我是child组件</h3>
                <span>接收到的内容是：{this.props.children}</span>
            </div>
        );
    }
}

export default Child;
```

2. 标签的嵌套，并且父级标签需要传递自己的值给孩子，具体参见 6-renderpropx/component/renderprops
> 在这里 如果使用上面的方案，是无法把Parent的state中的值传递给子组件的。除非代码中直接写死Parent里面是Child

app.jsx
```jsx
import React from 'react';
import Parent from "./component/Parent";
import Child from "./component/Child";

import Parent_Render from "./component/renderprops/Parent";
import Child_Render from './component/renderprops/Child'

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Parent>
                    <Child>123</Child>
                </Parent>
                {/*这里：1.Parent的子组件是动态可传的，2. Child也可以拿到Parent的值，*/}
                <Parent_Render render={(name) => <Child_Render name={name}>AAAAAA</Child_Render>}/>
            </React.Fragment>
        )
    }
}

export default App;


```

parent.jsx
```jsx
import React, {Component} from 'react';

class Parent extends Component {
    state = {"name": '我要给下游的数据'}
    render() {
        const {name} = this.state;
        return (
            <div>
                <h3>我是renderprops/Parent</h3>
                {this.props.render(name)}
            </div>
        );
    }
}

export default Parent;

```

child.jsx
```jsx
import React, {Component} from 'react';

class Child extends Component {
    render() {
        return (
            <div>
                <h3>我是renderprops/child</h3>
                上游给来的数据{this.props.name}, 标签体中的内容为{this.props.children}
            </div>
        );
    }
}

export default Child;
```

---
### errorbound错误边界，用以控制代码的报错
* 使用getDerivedStateFromError钩子实现
```jsx
import React, {Component} from 'react';

class Parent extends Component {
    state = {"haserror": false};
    /**
     * 当子组件出现报错的时候会进到这个方法
     * @param error
     */
    static getDerivedStateFromError(error) {
        console.error("######@@@@@@@", error);
        return {
            "haserror": true
        }
    }

    render() {
        return (
            <div>
                <h2>我是Parent</h2>
                {this.state.haserror ? "页面有点毛病哈" : this.props.children}
            </div>
        );
    }
}

export default Parent;
```

