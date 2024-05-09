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
import { T_AppStoreReducers } from './store';
import { T_ProductsPage } from './store/reducers/_productsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
    const { products } = useSelector<
        T_AppStoreReducers, 
        T_ProductsPage
    >((state) => state.$_productsPage);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index path="/" element={<Home />} />
                    <Route path="*" element={<NoPage />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    {products.map(product =>
                        <Route 
                            key={product.id}
                            path={`product/${product.name}`}
                            element={<ProductPage data={product} />} 
                        />
                    )}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default Router;