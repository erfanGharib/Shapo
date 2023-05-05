import { createSlice } from '@reduxjs/toolkit';
import { productData } from '../../data/productData';
import axios from 'axios';

export const $_products = createSlice({
    name: '_products',
    initialState: {
        products: productData,
        productsCpy: productData,
        filters: []
    },
    reducers: {
        setProductsCpy: ((state, { payload }) => {
            state.productsCpy = payload;
        }),
        setFilters: ((state, { payload }) => {
            // const filterCpy = [];
            // const index = 0;

            // do {
            //     if(filterCpy[index] === payload) {
            //         console.log('if');
            //         filterCpy.splice(
            //             index, 1
            //         );
            //     }
            //     else {
            //         console.log('else');
            //         filterCpy.push(payload);
            //     }
            //     index++;
            // }
            // while(index <= filterCpy.length);

            // // filterCpy.forEach((value, index) => {
            // // })

            // console.log(filterCpy);

            // filterCpy.forEach(filterName => {
            //     state.productsCpy.filter(product => {
            //         return checkFilterCondition(filterName, product[filterName]);
            //     })
            // })
        }),
    }
});
export const { setProductsCpy, setFilters } = $_products.actions;