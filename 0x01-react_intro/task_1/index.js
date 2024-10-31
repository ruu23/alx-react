import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../task_3/dashboard/src/App.js';
import reportWebVitals from '../task_3/dashboard/src/reportWebVitals.js';
import Notifications from '../task_3/dashboard/src/Notifications.js'

const notificationsRoot = ReactDOM.createRoot(document.getElementById('root-notifications'));
notificationsRoot.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
