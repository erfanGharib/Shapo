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
import ProductPage from './pages/productPage';
import store from './store';
import { Provider } from 'react-redux';
import Router from './Router';

const App = () => {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
}
export default App;
