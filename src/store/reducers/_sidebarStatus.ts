import { createSlice } from '@reduxjs/toolkit';

export type T_SidebarStatus = {
    status: boolean,
    IS_MAIN_SIDEBAR: boolean
}

const initialState: T_SidebarStatus = {
    status: false,
    IS_MAIN_SIDEBAR: true
}

export const $_sidebarStatus = createSlice({
    name: '_sidebarStatus',
    initialState,
    reducers: {
        setStatus: (state, { payload }: { payload: T_SidebarStatus['IS_MAIN_SIDEBAR'] }) => {
            state.status = !state.status;
            if(payload !== undefined) state.IS_MAIN_SIDEBAR = payload;
        },
    }
});

export const { setStatus } = $_sidebarStatus.actions;