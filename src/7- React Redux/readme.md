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
1. 精简版
> src下新建redux目录


2. 完整版
> redux中新建 count_action.js 放置创建的action对象，将原有dispatch的硬编码提取
> redux中新建 constants.js 放置容易写错的硬编码的 type值提取
