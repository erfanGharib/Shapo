import { configureStore } from '@reduxjs/toolkit';
import { $_productSliderStatus } from './reducers/_productSliderStatus';
import { $_sidebarStatus } from './reducers/_sidebarStatus';
import { $_sliderStatus } from './reducers/_sliderStatus';

const store = configureStore({
    reducer: {
        $_sliderStatus: $_sliderStatus.reducer,
        $_sidebarStatus: $_sidebarStatus.reducer,
        $_productSliderStatus: $_productSliderStatus.reducer,
    },
});
export default store;