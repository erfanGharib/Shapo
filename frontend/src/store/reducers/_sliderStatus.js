import { createSlice } from '@reduxjs/toolkit';

export const $_sliderStatus = createSlice({
    name: '_sliderStatus',
    initialState: {
        status: 0
    },
    reducers: {
        setCurrentSlide: state => {
            state.status++;
            if(state.status === 3) state.status = 0;
        },
    }
});

export const { setCurrentSlide } = $_sliderStatus.actions;