import { createSlice } from '@reduxjs/toolkit';

export const $_searchBox = createSlice({
    name: '_searchBox',
    initialState: {
        status: !(window.screen.width <= 768),
        value: ''
    },
    reducers: {
        setSearchBoxStatus: (state, { payload }) => {
            state.status = payload;
            console.log(payload);
        },
        setSearchBoxValue: (state, { payload }) => {
            state.value = payload;
        }
    }
});

export const { setSearchBoxStatus, setSearchBoxValue } = $_searchBox.actions;