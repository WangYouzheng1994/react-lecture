import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// 全局监听redux，并且重新刷新
store.subscribe(() => {
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
})
