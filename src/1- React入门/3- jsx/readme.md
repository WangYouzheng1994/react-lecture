### JSX
* 全名 JavaScript XML
* facebook针对react定义的一种类似于xml的扩展语法：js + xml
* 本质是React.createElement() js方式的语法糖
* 简化创建虚拟dom
---
### JSX语法规则
* 定义虚拟dom的时候，不要写引号
* 标签中混入js表达式要用{}：表达式的定义是 他会返回一个值。 比如调用变量，比如 调用变量的有返回值的方法
* 样式的类名指定不要用class 而是className，因为class 是es6语法的关键字
* 行内样式的编写要用胡子语法 如： style={{color:'white', width: '100px'}} style 属性值不是字符串 而是一个对象
* 一组虚拟dom必须只有一个根标签，注意 不是容器哈。
* 标签写的必须标准闭合
* 小写开头的尖角号中的值，被视为是html标签，必须要在html标签对应，否则报错
* 大写开头的尖角号的值，被视为是react的组件，如果找不到，就报错

