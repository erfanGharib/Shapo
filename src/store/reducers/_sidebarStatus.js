import { createSlice } from '@reduxjs/toolkit';

export const $_sidebarStatus = createSlice({
    name: '_sidebarStatus',
    initialState: {
        status: false,
        IS_MAIN_SIDEBAR: true
    },
    reducers: {
        setStatus: (state, { payload }) => {
            state.status = !state.status;
            if(payload !== undefined) state.IS_MAIN_SIDEBAR = payload;
        },
    }
});

export const { setStatus } = $_sidebarStatus.actions;