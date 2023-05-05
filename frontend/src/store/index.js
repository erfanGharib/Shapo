import { configureStore } from '@reduxjs/toolkit';
import { $_productSliderStatus } from './reducers/_productSliderStatus';
import { $_sidebarStatus } from './reducers/_sidebarStatus';
import { $_sliderStatus } from './reducers/_sliderStatus';
import { $_products } from './reducers/_products';
import { $_posts } from './reducers/_posts';
import { $_cart } from './reducers/_cart';
import { $_qty } from './reducers/_qty';
import { $_pageCounter } from './reducers/_pageCounter';

const store = configureStore({
    reducer: {
        $_productSliderStatus: $_productSliderStatus.reducer,
        $_sidebarStatus: $_sidebarStatus.reducer,
        $_sliderStatus: $_sliderStatus.reducer,
        $_products: $_products.reducer,
        $_posts: $_posts.reducer,
        $_cart: $_cart.reducer,
        $_qty: $_qty.reducer,
        $_pageCounter: $_pageCounter.reducer,
    },
});
export default store;