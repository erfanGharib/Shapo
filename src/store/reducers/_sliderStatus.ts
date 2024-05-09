import { createSlice } from '@reduxjs/toolkit';

export type T_SliderStatus = typeof initialState;

const initialState = {
    status: 0
}

export const $_sliderStatus = createSlice({
    name: '_sliderStatus',
    initialState,
    reducers: {
        setCurrentSlide: state => {
            state.status++;
            if(state.status === 3) state.status = 0;
        },
    }
});

export const { setCurrentSlide } = $_sliderStatus.actions;