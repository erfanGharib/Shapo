import { createSlice } from '@reduxjs/toolkit';

export const $_qty = createSlice({
    name: '_qty',
    initialState: {
        qty: 1,
    },
    reducers: {
        setQty: (state, { payload }) => {
            const dataCpy = [...state.data];
            console.log(payload);

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

export const { setQty } = $_qty.actions;