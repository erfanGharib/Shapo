import { configureStore } from '@reduxjs/toolkit';
import { $_productSliderStatus } from './reducers/_productSliderStatus';
import { $_sidebarStatus } from './reducers/_sidebarStatus';
import { $_sliderStatus } from './reducers/_sliderStatus';
import { $_paginator } from './reducers/_paginator';
import { $_searchBox } from './reducers/_searchBox';
import { $_productsPage } from './reducers/_productsPage';
import { $_posts } from './reducers/_posts';
import { $_cart } from './reducers/_cart';
import { $_qty } from './reducers/_qty';

export type T_AppStoreReducers = {
    [
        key in
        | '$_cart'
        | '$_paginator'
        | '$_posts'
        | '$_productsPage'
        | '$_productSliderStatus'
        | '$_qty'
        | '$_searchBox'
        | '$_sidebarStatus'
        | '$_sliderStatus'
    ]: any
}

const store = configureStore({
    reducer: {
        $_productSliderStatus: $_productSliderStatus.reducer,
        $_sidebarStatus: $_sidebarStatus.reducer,
        $_sliderStatus: $_sliderStatus.reducer,
        $_paginator: $_paginator.reducer,
        $_searchBox: $_searchBox.reducer,
        $_productsPage: $_productsPage.reducer,
        $_posts: $_posts.reducer,
        $_cart: $_cart.reducer,
        $_qty: $_qty.reducer,
    },
});
export default store;