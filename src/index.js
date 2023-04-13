import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/styles/index.css';
import Home from './pages';
import NoPage from './pages/404';
import AboutUs from './pages/aboutUs';
import Blog from './pages/blog';
import Cart from './pages/cart';
import ContactUs from './pages/contactUs';
import Layout from './pages/layout';
import Shop from './pages/shop';
import reportWebVitals from './reportWebVitals';
import ProductPage from './pages/productPage';
import App from './App';
import 'notyf/notyf.min.css';

const IS_WIDTH_768px = window.screen.width <= 768;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default IS_WIDTH_768px;