import { createSlice } from '@reduxjs/toolkit';

export const $_sidebarStatus = createSlice({
    name: '_sidebarStatus',
    initialState: {
        status: false
    },
    reducers: {
        setStatus: (state, payload) => {
            state.status = !state.status;
        },
    }
});

export const { setStatus } = $_sidebarStatus.actions;