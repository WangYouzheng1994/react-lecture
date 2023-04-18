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