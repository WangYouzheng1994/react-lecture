import React from 'react'
import ReactDOM from 'react-dom/client';
import {root} from './index'

/**
 * 该方法每次都会反复执行~~~，
 * 为什么React.useState没有每次都给初始化为0呢？ React底层做了处理啦~
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
    // React.useState返回一个俩元素的数组，第一个是原来的值，第二个是更新状态的函数
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        console.log("@@!")
        let timer = setInterval(() => {
            add()
        }, 500)
        return () => {
            // 每次渲染执行effect函数的时候 直接解绑
            clearInterval(timer)
        }
    }, [count])

/*    React.useEffect(() => {
        console.log("我是初始化")
        timer = setInterval(() => {
            add()
        }, 500)
        timers.push(timer)
        return () => {
            console.log(timers)
            clearInterval(timer)
        }
    }, [])*/

    /**
     * 加的回调
     */
    function add() {
        setCount(count + 1);
    }

    function unmount() {
        // React18版本 需要用root
        root.unmount(document.getElementById('root'))
        // 低版本
        // ReactDOM.unmountComponentAtNode(document.getElementById("root"));

    }

    /**
     * 渲染
     */
    return (
        <div>
            <h2>当前求和为：{count}</h2>
            <button onClick={add}>点我+1</button>
            <button onClick={unmount}>卸载~</button>
        </div>
    );
}

export default App;
