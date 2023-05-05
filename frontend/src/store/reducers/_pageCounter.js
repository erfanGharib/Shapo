import { createSlice } from '@reduxjs/toolkit';

export const $_pageCounter = createSlice({
    name: '_pageCounter',
    initialState: {
        currentPage: 1
    },
    reducers: {
        setCurrentPage: (state, { payload }) => {
            if(payload >= 1) {
                state.currentPage = payload;
            }
            else throw 'currentPage cannot be NaN or smaller than 1';
        },
    }
});

export const { setCurrentPage } = $_pageCounter.actions;