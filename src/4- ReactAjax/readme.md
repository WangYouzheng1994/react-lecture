### Axios

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

* 方案2：src目录下新增setupProxy.js
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
- 此文件会被脚手架放给webpack，因此代码的编写就是commonjs语法
