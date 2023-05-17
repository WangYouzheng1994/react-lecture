### ReactAjax目录
1. react-ajax-lecture-project
* 配置两种代理，以及axios简单demo
2. github_demo_test
* 完成静态页面的编制，组件合并，事件绑定发请求
3. github_demo_test_pubsub
* Pubsub发布订阅下的数据传递
4. github_demo_test_fetch
* 使用fetch的方式发送请求 

### 使用Axios发送请求

```
pnpm add axios 安装
也可以
pnpm i axios
```

### 本地开发配置代理，解决跨域

* 方案1：在package.json中新增配置如下，假设本地后台服务端口为5000

```json
{
  "proxy": "http://localhost:5000"
}
```
- 此方案没法配多个代理。他会把所有在本地localhost:3000找不到的请求全部转发给localhost:5000

* 方案2：src目录下新增setupProxy.js (React17)
```js
const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        proxy('/api', {
            target: 'http://localhost:5000',
            changeOrigin: true,
            pathRewrite: {'/api1': ''}
        })

    )
}

```

* React18
```js

//需要采用CommonJS的写法
const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(createProxyMiddleware('/api', //遇见/api-elm前缀的请求,就会触发该代理配置
            {
                target: 'http://localhost:8080', //请求转发给谁（能返回数据的服务器地址）
                changeOrigin: true,  //控制服务器收到的响应头中Host字段的值
                pathRewrite: {'^/api': ''} //重写请求路径，保证交给后台服务器是正常地请求地址（必须配置）
            }))
        /*createProxyMiddleware('/api-news',
            {
                target: 'https://pacaio.match.qq.com',
                changeOrigin: true,
                pathRewrite: {'^/api-news': ''}
            }))*/
}
```
- 此文件会被脚手架放给webpack，因此代码的编写就是commonjs语法

可参考：
https://blog.csdn.net/qq_42543244/article/details/125371238
---

### 静态bootstrap页面转React组件
1. 在public/index.html中，引入在线的bootstrap.css样式，因为现在还没用bootstrap.js
```
<!-- 引入css -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"/>
```
2. 如果不想用在线的bootstrap.css样式，那么需要在public下新建css文件夹，然后拷贝进入该文件夹


### eslint conflict 冲突问题
```
pnpm add eslint-config-react-app
```

### 使用pubsubjs发布订阅技术进行数据的通信
* 使用发布订阅技术进行数据通信可以解决App.jsx过重的问题
* 可以进行兄弟间直接的数据传递
* 常见的是使用pubsubjs： https://github.com/mroderick/PubSubJS
```
pnpm install pubsub-js
```
1. 发布订阅
```
import PubSub from 'pubsub-js';

PubSub.publish("UpdateList", {isFirst: false, isLoading: true})
```

3. 订阅主题，消费消息
```js

import PubSub from 'pubsub-js';

class List extends Component {
    state = {users: [], isFirst: true, isLoading: false, errorMsg: ""}

    /**
     * 订阅消费
     */
    componentDidMount() {
        // 频道/主题， 事件回调
        this.token = PubSub.subscribe('UpdateList', (_, stateObj) => {
            this.setState(stateObj);
        })
    }

    /**
     * 取消订阅
     */
    componentWillUnmount() {
        PubSub.unsubscribe(this.token);
    }
}

```
---

### 使用Fetch进行网络请求
1. 无需单独安装依赖包
2. 使用代码
- 原始版
```js
fetch().then(
    // 服务器有响应
    response => {
        console.log("连接服务器成功了")
        return response.json(); // 注意这是个方法，把服务器返回值转换成JSON的一个Promise
    },
    // HTTP请求有问题
    error => {
        console.log("连接服务器失败！")
        // 这里要加上中断Promise链的语句，即：pending状态的Promise对象，就不会执行下面的Then了
        return new Promise(() => {})
    }
).then(
    // 这里的意思是响应回来了，但是数据(response.json())是有问题的
    response => {console.log("获取数据成功了", response)},
    error => {console.log("获取数据失败了", error)}
)
```
> 以上代码有优化空间，对于fetch的Promise回调来说，管他是HTTP报错还是JSON数据解析的报错，都是error

- 优化版
```js

fetch().then(
    // 服务器有响应
    response => {
        console.log("连接服务器成功了")
        return response.json(); // 注意这是个方法，把服务器返回值转换成JSON的一个Promise
    },
    // HTTP请求有问题
 /*   error => {
        console.log("连接服务器失败！")
        // 这里要加上中断Promise链的语句，即：pending状态的Promise对象，就不会执行下面的Then了
        return new Promise(() => {})
    }*/
).then(
    // 这里的意思是响应回来了，但是数据(response.json())是有问题的
    response => {console.log("获取数据成功了", response)},
    // error => {console.log("获取数据失败了", error)}
).catch((error) => {console.log(error)})


```


- 非回调版，使用await优化
```
// 必须是async的才可以await
search = async () => {
    try {
        const response = await fetch("");
        const data = await response.json(); // await右边一定要promise
    } catch (error) {
        console.log("请求出错", error)
    }
}


```


3. 特点
* 原生函数，但是不是使用XmlHTtpRequest来进行AJAX请求
* 老版本浏览器支持度低



#### 总结
* ES6复习： 解构赋值
* 消息发布订阅通信，要在componentWillUnmount取消订阅
* fetch
