import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import Router from './Router';

export const calcTotalPrice = (cartData) => {
    let totalPrice = 0;
    cartData.forEach(({ price, qty }) => totalPrice += price * qty);
    return totalPrice;
}

const App = () => {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
}
export default App;
