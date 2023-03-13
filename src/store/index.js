import { configureStore } from '@reduxjs/toolkit';
import { $_mainSlider } from './reducers/_mainSlider';

const store = configureStore({
    reducer: {
        $_mainSlider: $_mainSlider.reducer,
    },
});
export default store;