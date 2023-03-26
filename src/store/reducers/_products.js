import { createSlice } from '@reduxjs/toolkit';

export const $_products = createSlice({
    name: '_products',
    initialState: {
        data: [
            {
                id: 1,
                name: 'صندلی نانسی',
                price: 7_000_000,
                oldPrice: null,
                inventory: 7,
                desc: 'این صندلی یک صندلی عالی است'
            },
            {
                id: 2,
                name: 'میز چوب کاج',
                price: 1_500_000,
                oldPrice: null,
                inventory: 4,
                desc: 'این میز یک میز عالی است'
            },
        ]
    },
    reducers: {
        goRight: state => {
            if(state.status !== -((state.limit - 4) * state.translation)) 
                state.status -= state.translation;
        },
        // goLeft: state => {            
        //     if(state.status !== 0) 
        //         state.status += state.translation;
        // },
        // setLimit: (state, { payload }) => {
        //     state.limit = payload;
        // }
    }
});

export const { goRight } = $_products.actions;