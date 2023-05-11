// React17 写法
// const proxy = require('http-proxy-middleware')
//
// module.exports = function(app) {
//     app.use(
//         proxy('/api', {
//             // 转发目标的服务器ip
//             target: 'http://localhost:8080',
//             // true让服务器知道请求头的host值是localhost8080，如果false就是不重写host，服务器看到的是localhost3000。尽量设置true
//             changeOrigin: true,
//             // 去掉/api的前缀
//             pathRewrite: {'^/api': ''}
//         })
//     )
// }


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
