import { createSlice } from '@reduxjs/toolkit';

export const $_productSliderStatus = createSlice({
    name: '_productSliderStatus',
    initialState: {
        status: 0,
        limit: 0,
        translation: 25.5,
    },
    reducers: {
        goRight: state => {
            if(state.status !== -((state.limit - 4) * state.translation)) 
                state.status -= state.translation;
        },
        goLeft: state => {            
            if(state.status !== 0) 
                state.status += state.translation;
        },
        setLimit: (state, { payload }) => {
            state.limit = payload;
        }
    }
});

export const { goRight, goLeft, setLimit } = $_productSliderStatus.actions;