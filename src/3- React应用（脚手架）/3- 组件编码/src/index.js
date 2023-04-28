// react核心库
import React from 'react';
// react18 dom依赖
// import ReactDOM from 'react-dom/client';
// react17
import ReactDom from 'react-dom';
// 引入app
import App from './App';

/*
react 18的写法
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App></App>
    </React.StrictMode>
);
*/

/*
react 17的写法
 */
ReactDom.render(<App/>, document.getElementById('root'))