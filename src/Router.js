import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
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
import { useSelector } from 'react-redux';

const Router = () => {
    const { data } = useSelector(state => state.$_products);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="*" element={<NoPage />} />
                    <Route path="shop" element={<Shop />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="about-us" element={<AboutUs />} />
                    <Route path="contact-us" element={<ContactUs />} />
                    {data.map((data) =>
                        <Route 
                            key={data['id']}
                            path={`product/${data['name']}`}
                            element={<ProductPage data={data} />} 
                        />
                    )}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default Router;