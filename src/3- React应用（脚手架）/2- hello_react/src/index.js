// react核心库
import React from 'react';
// react18 dom依赖
import ReactDOM from 'react-dom/client';
// react17 dom依赖
// import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import App2_comp from './App2_comp.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App2_comp></App2_comp>
    </React.StrictMode>
);
