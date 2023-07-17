import React from 'react';
import ReactDOM from 'react-dom/client';
//Custom Styles
import './styles/index.css';
//Custom Components
import App from "./components";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);