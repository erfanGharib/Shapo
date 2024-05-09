import { createSlice } from '@reduxjs/toolkit';

export type T_Paginator = typeof initialState;

const initialState = {
    currentPage: 1
}

export const $_paginator = createSlice({
    name: '_paginator',
    initialState,
    reducers: {
        setCurrentPage: (state, { payload }: { payload: number }) => {
            if(payload >= 1) {
                state.currentPage = payload;
            }
            else throw 'currentPage cannot be NaN or smaller than 1';
        },
    }
});

export const { setCurrentPage } = $_paginator.actions;