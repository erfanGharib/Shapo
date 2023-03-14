import { configureStore } from '@reduxjs/toolkit';
import { $_sliderStatus } from './reducers/_sliderStatus';

const store = configureStore({
    reducer: {
        $_sliderStatus: $_sliderStatus.reducer,
    },
});
export default store;