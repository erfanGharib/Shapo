import { createSlice } from '@reduxjs/toolkit';
import { Notyf } from 'notyf';
import { T_Product } from '../../data/productData';
import { T_Qty } from './_qty';

export type T_Cart = {
    data: T_Product[]
}

const notyf = new Notyf({
    position: {
        x: 'left',
        y: 'bottom',
    },
    types: [
        {
            type: 'success',
            background: 'rgb(21 128 61)',
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
        addToCart: (state, { payload }: { payload: T_Product }) => {
            const dataCpy = [...state.data];
            
            if(!dataCpy.some(v => v.id === payload.id) && payload.inventory > 0) {
                dataCpy.push(payload);
                state.data = dataCpy;

                notyf.success(`محصول به سبد خرید اضافه شد`);
            }
            else if(!(payload.inventory > 0)) {
                notyf.error('محصول ناموجود است');
            }
            else {
                notyf.error('محصول قبلا به سبد خرید اضافه شده است');
            }
        },
        removeFromCart: (state, { payload }: { payload: 'all' | number }) => {
            const dataCpy = [...JSON.parse(JSON.stringify(state.data))];

            if (payload === 'all') state.data = [];
            else if (payload >= 0) {
                dataCpy.filter((value, index, arr) => {
                    if (value.id === payload) {
                        arr.splice(index, 1);
                        return true;
                    }
                    return false;
                })

                state.data = dataCpy;
            }
        },
        updateQty: (state, { payload }: { payload: T_Qty['data'][number] }) => {
            const dataCpy = [...state.data];

            if (payload.id > 0 && payload.qty > 0) {
                dataCpy.filter((value, index, arr) => {
                    if (value.id === payload.id) {
                        value.qty = payload.qty;
                        return true;
                    }
                    return false;
                })

                state.data = dataCpy;
            }
        },
    }
});

export const { addToCart, removeFromCart, updateQty } = $_cart.actions;