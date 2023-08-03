import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.less';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'lib-flexible';

// 全局导入样式
// import 'antd-mobile/lib/activity-indicator/style/css';        // 加载 CSS
// import 'antd-mobile/lib/toast/style/css';        // 加载 CSS
// import 'antd-mobile/lib/icon/style/css';        // 加载 CSS
// import 'antd-mobile/lib/button/style/css';        // 加载 CSS
// import 'antd-mobile/lib/tabs/style/css';        // 加载 CSS
// import 'antd-mobile/lib/list/style/css';        // 加载 CSS
// import 'antd-mobile/lib/pull-to-refresh/style/css';        // 加载 CSS
// import 'antd-mobile/lib/card/style/css';        // 加载 CSS

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
