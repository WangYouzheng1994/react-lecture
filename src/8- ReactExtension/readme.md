### setState 
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


