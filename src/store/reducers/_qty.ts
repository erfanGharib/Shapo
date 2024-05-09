import { createSlice } from '@reduxjs/toolkit';
import { T_Product } from '../../data/productData';

export type T_Qty = {
    qty: number;
    data: Pick<T_Product, "id" | "qty">[]
}

const initialState: T_Qty = {
    qty: 1,
    data: []
}

export const $_qty = createSlice({
    name: '_qty',
    initialState,
    reducers: {
        setQty: (state, { payload }) => {
            const dataCpy = [...state.data];

            if (payload.id > 0 && payload.qty > 0) {
                dataCpy.filter((value) => {
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

export const { setQty } = $_qty.actions;