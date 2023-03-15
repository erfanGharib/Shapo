import { createSlice } from '@reduxjs/toolkit';

export const $_productSliderStatus = createSlice({
    name: '_productSliderStatus',
    initialState: {
        status: 0,
        limit: 0,
        translation: 25,
    },
    reducers: {
        setStatus: (state, { payload }) => {
            console.log((state.limit - 4) * state.translation, payload);
            if(
                payload === 'plus' && 
                state.status !== -((state.limit - 4) * state.translation)
            ) state.status -= state.translation;
            
            else if(
                payload === 'minus' && 
                state.status !== 0
            ) state.status += state.translation;
        },
        setLimit: (state, { payload }) => {
            state.limit = payload;
        }
    }
});

export const { setStatus, setLimit } = $_productSliderStatus.actions;