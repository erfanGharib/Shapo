import { configureStore } from '@reduxjs/toolkit';
import { $_productSliderStatus } from './reducers/_productSliderStatus';
import { $_sidebarStatus } from './reducers/_sidebarStatus';
import { $_sliderStatus } from './reducers/_sliderStatus';
import { $_products } from './reducers/_products';
import { $_posts } from './reducers/_posts';

const store = configureStore({
    reducer: {
        $_sliderStatus: $_sliderStatus.reducer,
        $_sidebarStatus: $_sidebarStatus.reducer,
        $_productSliderStatus: $_productSliderStatus.reducer,
        $_products: $_products.reducer,
        $_posts: $_posts.reducer,
    },
});
export default store;