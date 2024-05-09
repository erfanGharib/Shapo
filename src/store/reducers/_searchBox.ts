import { createSlice } from '@reduxjs/toolkit';

export type T_SearchBox = typeof initialState;

const initialState = {
    status: !(window.screen.width <= 768),
    value: ''
}

export const $_searchBox = createSlice({
    name: '_searchBox',
    initialState,
    reducers: {
        setSearchBoxStatus: (state, { payload }: { payload: T_SearchBox['status'] }) => {
            state.status = payload;
        },
        setSearchBoxValue: (state, { payload }: { payload: T_SearchBox['value'] }) => {
            state.value = payload;
        }
    }
});

export const { setSearchBoxStatus, setSearchBoxValue } = $_searchBox.actions;