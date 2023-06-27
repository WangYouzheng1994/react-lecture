import React from 'react'

/**
 * 该方法每次都会反复执行~~~，
 * 为什么React.useState没有每次都给初始化为0呢？ React底层做了处理啦~
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
    // React.useState返回一个俩元素的数组，第一个是原来的值，第二个是更新状态的函数
    const [count, setCount] = React.useState(0)

    const [name, setName] = React.useState("tom")
    /**
     * 加的回调
     */
    function add() {
        setCount(count+1);
        setCount(preCount => preCount+1)
    }

    function changeName() {
        setName(name1=> name+1)
    }

    /**
     * 渲染
     */
    return (
        <div>
            <h2>当前求和为：{count}，名字是： {name}</h2>
            <button onClick={add}>点我+1</button>
            <button onClick={changeName}>改名字了~</button>
        </div>
    );
}

export default App;
