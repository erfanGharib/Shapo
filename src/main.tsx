import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import './assets/styles/index.css';
import './assets/styles/tailwind.css';
import 'notyf/notyf.min.css';

export const IS_WIDTH_768px = window.screen.width <= 768;
export const EQUAL_SIGN = "~";
export const AND_SIGN = "+";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)