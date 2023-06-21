Redux中文入门教程链接
https://www.redux.org.cn/docs/introduction/PriorArt.html

---
### Redux三大核心概念
1. action
* 包含俩属性：type 唯一字符串，相当于接口，data 数据
```
{type:"add_student", data:{name:"zhangsan", age:25}}
```
2. reducer
* 他根据state+action，负责初始化以及加工store的数据，
3. store
* 负责存储数据，连接了action和reducer

### Redux 安装与使用
```shell
pnpm add redux
```
1. 精简版，具体参见2-react-redux
> src下新建redux目录

新建store.js文件
```js
/**
 * 该文件用于暴露一个 store对象
 */
import {createStore} from 'redux'
import countReducer from './count_reducer'

const store = createStore(countReducer)
export default store;

```
新建count_reducer.js
```js
/**
 * 该文件用于暴露一个 store对象
 */
import {createStore} from 'redux'
import countReducer from './count_reducer'

const store = createStore(countReducer)
export default store;
```

组件使用
```jsx
// 引入redux store
import store from '../../redux/store'

// ...
/**
 * 加法
 */
increment = () => {
    const {value} = this.selectNumber;
    // 调用action，redux最终会调用到我们自定义的reducer function逻辑
    store.dispatch({type:'increment', data:value*1})
}
// ...
```

2. 完整版，具体参见3-react-redux-full
> redux中新建 count_action.js 放置创建的action对象，将原有dispatch的硬编码提取
> redux中新建 constants.js 放置容易写错的硬编码的 type值提取

3. 异步redux，具体参见4-react-redux-async
> 通过action来区分，同步action就是个Object，异步action就是个function

前置条件 引入redux-thunk
```shell
pnpm add redux-thunk
```
> 在store.js中引入thunk，以及redux中间件
```jsx
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import countReducer from './count_reducer'

const store = createStore(countReducer, applyMiddleware(thunk))
export default store;
```

> 在count_action文件中 进行对应的异步处理

方案1：
```jsx
import store from './store'
/**
 * 异步的action
 */
export const createIncrementAsyncAction = (data, time) => {
    /*
        自己要调用store*/
    return () => {
        setTimeout(() => {
           store.dispatch(createIncrementAction(data))
        }, time);
    }
}
```

方案2：
```jsx

export const createIncrementAsyncAction = (data, time) => {
    /**
     * 直接用redux傳進來的dispatch實現
     */
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time);
    }
}
```

---
### React-Redux的使用
1. 安装
```shell
pnpm add react-redux
```
2. 整体步骤
> 使用react-redux中的connect连接 现有的ui component组件以及redux组件(store和action)

src中新建containers目录 根据模块创建一个目录 在旗下创建index.jsx
```js
// 引入连接器，连接ui和redux
import {connect} from 'react-redux'


/**
 * redux 会把state传递进来 我们自己就不用引入store了
 * 该函数所返回的对象中的key/value 就是给ui组件props的key/value，作为状态store组件
 * 这个函数在redux中，称之为mapStateToProps
 *
 * @param state
 * @returns {{count}}
 */
function a(state) {
    return {count: state}
}

/**
 * redux 会把dispatch传递进来
 * 该函数所返回的对象中的key/value 就是给ui组件props的key/value，作为操作stroe的action
 * 这个函数在redux中，称之为mapDispatchToProps
 *
 * @param dispatch
 * @returns {{jia: jia}}
 */
function b(dispatch) {
    return {
        jia: (number) => {
            // 调用到redux的increment逻辑
            // dispatch({type: 'increment', data})
            dispatch(createIncrementAction(number))
        },

        jiaAsycn: (number) => {
            setTimeout(()=> {
                dispatch(createIncrementAction(number))
            }, 500)
        },

        jian: (number) => {
            dispatch(createDecrementAction(number));
        }
    }
}

/**
 * connect方法返回了一个方法
 * 第二个方法传入Component
 */
export default connect(a, b)(CountUI)

```

在现有的ui组件的 父级组件调用的时候 改成引入container组件，并且将对应的store作为props进行传递
```jsx
import React, {Component} from 'react'
//引入的是容器组件
import Count from "./containers/Count";
import store from './redux/store';


class App extends Component {
  render() {
    return (
        <div>
          {/*  给容器组件传递store*/}
          <Count store={store}/>
        </div>
    )
  }
}

export default App;
```
继续保留index.js文件中的全局刷新


```js
import store from './redux/store'

// 全局监听redux，并且重新刷新
store.subscribe(() => {
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
})


```
---
### ### React-Redux的优化版本
1. 编码层
```js
/**
 * connect方法又返回了一个方法
 * 第二个方法传入UI Component
 */
export default connect(
    state => ({count: state}),
    dispatch => ({
        jia: number => dispatch(createIncrementAction(number)),
        jiaAsycn: number => dispatch(createIncrementAsyncAction(number), 500),
        jian: number => dispatch(createDecrementAction(number))
    }))(CountUI)
```
2. mapDispatchToProps的api层优化，mapDispatchToProps改成传递对象 key就是对外暴露的props的可以，value为action的value
```js
export default connect(
    state => ({count: state}),

    /*dispatch => ({
        jia: number => dispatch(createIncrementAction(number)),
        jiaAsycn: number => dispatch(createIncrementAsyncAction(number), 500),
        jian: number => dispatch(createDecrementAction(number))
    }*/
    {
        jia: createIncrementAsyncAction,
        jiaAsycn: createIncrementAsyncAction,
        jian: createDecrementAction
    }
)(CountUI)
```
