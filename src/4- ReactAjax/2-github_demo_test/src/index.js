import React from 'react';

// import './index.css';
import App from './App';

import bootstrap from 'bootstrap'
import ReactDom from "react-dom";

/*

import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/



/*
react 17的写法
 */
ReactDom.render(<App/>, document.getElementById('root'))
