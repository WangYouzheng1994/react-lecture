### Axios

```
pnpm add axios 安装
也可以
pnpm i axios
```

### 本地开发配置代理，解决跨域

* 在package.json中新增配置如下，假设本地后台服务端口为5000

```json
{
  "proxy": "http://localhost:5000"
}
```
