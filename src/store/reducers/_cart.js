import { createSlice } from '@reduxjs/toolkit';
import { Notyf } from 'notyf';

const notyf = new Notyf({
    position: {
        x: 'left',
        y: 'bottom',
    },
    types: [
        {
          type: 'success',
          background: 'rgb(34 197 94)',
          duration: 2500,
        },
        {
          type: 'error',
          background: 'rgb(220 38 38)',
          duration: 4000,
        }
    ]
})

export const $_cart = createSlice({
    name: '_cart',
    initialState: {
        data: []
    },
    reducers: {
        addToCart: (state, { payload }) => {
            try {
                const dataCpy = [...state.data];
                dataCpy.push(payload);
                state.data = dataCpy;

                notyf.success(`محصول به سبد خرید اضافه شد`);
            }
            catch(err) {
                notyf.error('اضافه کردن محصول به سبد خرید با مشکل مواجه شد لطفا دوباره تلاش بفرمایید');
                throw err;
            }
        },
        removeFromCart: (state, { payload }) => {
            const dataCpy = [...state.data];

            if (payload === 'all') state.data = [];
            else if (payload >= 0) {
                dataCpy.splice(payload - 1, 1);
                state.data = dataCpy;
            }

            console.log(dataCpy);
            console.log(state.data);
        },
    }
});

export const { addToCart, removeFromCart } = $_cart.actions;