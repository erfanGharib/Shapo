import { applyMiddleware, combineReducers, compose, configureStore } from '@reduxjs/toolkit';
import { $_productSliderStatus } from './reducers/_productSliderStatus';
import { $_sidebarStatus } from './reducers/_sidebarStatus';
import { $_sliderStatus } from './reducers/_sliderStatus';
import { connectRoutes } from 'redux-first-router';
import { $_products } from './reducers/_products';
// import page from './pageReducer'

// const routesMap = {
//   HOME: '/',
//   PRODUCT_PAGE: '/products/:id'
// }

// export default function store(preloadedState) {
//     const { reducer, middleware, enhancer } = connectRoutes(routesMap);
  
//     const rootReducer = combineReducers({ page, location: reducer });
//     const middlewares = applyMiddleware(middleware);
//     const enhancers = compose(enhancer, middlewares);

    const store = configureStore({
        reducer: {
            $_sliderStatus: $_sliderStatus.reducer,
            $_sidebarStatus: $_sidebarStatus.reducer,
            $_productSliderStatus: $_productSliderStatus.reducer,
            $_products: $_products.reducer,
        },
        // preloadedState, enhancers
    });

//     return { store }
// }
export default store;