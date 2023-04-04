import { createSlice } from '@reduxjs/toolkit';

export const $_cart = createSlice({
    name: '_cart',
    initialState: {
        data: []
    },
    reducers: {
        addToCart: (state, { payload }) => {
            state.data.push(payload);
        },
        removeFromCart: (state, { payload }) => {
            if(payload === 'all') state.data = [];
            else if(payload >= 0) state.data.splice(payload, 1);

            console.log(payload);
            console.log(state.data);
        },
    }
});

export const { addToCart, removeFromCart } = $_cart.actions;