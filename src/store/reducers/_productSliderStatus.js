import { createSlice } from '@reduxjs/toolkit';

export const $_productSliderStatus = createSlice({
    name: '_productSliderStatus',
    initialState: {
        status: 0,
        config: {
            limit: 0,
            translation: 25.5,
            cols: 4
        }
    },
    reducers: {
        goRight: state => {
            if(state.status !== -((state.config.limit - state.config.cols) * state.config.translation)) 
                state.status -= state.config.translation;
        },
        goLeft: state => {            
            if(state.status !== 0) 
                state.status += state.config.translation;
        },
        setConfig: (state, { payload }) => {
            state.config = payload;
            console.log(state.config, payload);
        },
    }
});

export const { goRight, goLeft, setConfig } = $_productSliderStatus.actions;