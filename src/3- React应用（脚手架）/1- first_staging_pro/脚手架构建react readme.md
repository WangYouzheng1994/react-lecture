#### React脚手架
1. 架构为 react+ webpack+es6+ eslint
2. react提供了一个脚手架库，create-react-app
3. 脚手架开发的项目就是 模块化，组件化，工程化

使用脚手架
1. 安装脚手架库 npm install -g create-react-app
> 又出各种傻逼问题。换成pnpm安装，详见下面的pnpm的使用
2. 在期望创建项目的目录下执行以下命令 创建项目
```
pnpm install create-react-app -g 

随后创建项目 
pnpm create react-app first_staging_pro_test
```
3. 启动项目
```
pnpm run start
```

---
##### jetbrains系列配置terminal为git bash，用来使用linux命令
1. idea配置 terminal 指向git安装目录的bin/bash.exe
如：C:\Program Files\Git\bin\bash.exe --login -i， 一定要加上后面的--login -i 否则ll等命令不好用

##### pnpm的使用

https://blog.csdn.net/snowball_li/article/details/124787870

https://pnpm.io/zh/

1. 安装pnpm
```
//npm设置远程仓库
npm config set registry https://registry.npm.taobao.org。
npm i pnpm -g
或者 npm install -g cnpm --registry=https://registry.npm.taobao.org


pnpm config get registry //查看源

pnpm config set registry https://registry.npmmirror.com //切换源

pnpm install 安装包 

pnpm store path 获取本地的仓库目录，他这种方式就比npm和yarn好太多了，就是java的Maven思想模式
pnpm store prune 清空本地仓库中未被引用的包
```

2. pnpm的仓库设置

* 配置全局安装路径
```shell
pnpm config set store-dir G:\\pnpm_store\\dependency
```
* 配置全局缓存路径
```shell
pnpm config set cache-dir G:\\pnpm_store\\cache
```

3. 安装指定版本的包
> https://npmmirror.com/package/react-router/v/5.3.4?spm=a2c6h.24755359.0.0.8d6a69e6xyUvGQ&file=5.3.4 查看指定的包

```shell
# 安装最新的版本
pnpm install react-router-dom
# 安装指定的版本
pnpm install react-router-dom@5.3.4
pnpm install react-router-dom@classic 这个是数据源决定的
```
