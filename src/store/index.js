import { configureStore } from '@reduxjs/toolkit';
import { $_sidebarStatus } from './reducers/_sidebarStatus';
import { $_sliderStatus } from './reducers/_sliderStatus';

const store = configureStore({
    reducer: {
        $_sliderStatus: $_sliderStatus.reducer,
        $_sidebarStatus: $_sidebarStatus.reducer,
    },
});
export default store;