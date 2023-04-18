 ### webpack混合暴露

* 定义
 ```js
const React = {a:1, b:2}

/**
 * 分体暴露
 */
export class Component {
    
}

React.Component = Component

/**
 * 默认暴露
 */
export default React
```

* 使用1
```js

import React from './module.js'

// 这是从React拿出来的那个Component class，class之前有记录其实就是 Function
const {Component} = React
new Component();

```

* 使用2 
```js
import React, {Component} from './module.js'

new Component();

```

### 组件模块化
1. 组件放到同一个components目录下
2. 每个组件在components内部再根据独立的组件再进行分离
3. 组件的js文件名为index.js，这样import的时候就可以省略掉文件名，他会自动引入index.js的

### 样式模块化
1. 文件名加上module，如： xxx.module.css
2. 使用
```typescript jsx
import React, {Component} from "react";
import h from './index.module.css'

export default class index extends Component {
    render() {
        return <h2 className={h.hhh}>index，我是组件化了~</h2>
    }
}

```
3. 总结，用处不多，后续会用less
