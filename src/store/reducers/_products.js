import { createSlice } from '@reduxjs/toolkit';
import { productData } from '../../data/productData';

export const $_products = createSlice({
    name: '_products',
    initialState: {
        products: productData,
        productsCpy: productData,
        filters: {
            exist: false,
            cat: false,
            name: false,
            offered: false,
            priceRange: false,
        },
        categories: [
            'اکسسوری',
            'دکوراسیون',
            'مبلمان'
        ]
    },
    reducers: {
        setProductsCpy: ((state, { payload }) => {
            state.productsCpy = payload;
        }),
        setFilters: ((state, { payload }) => {
            state.filters = payload
        }),
    }
});
export const { setProductsCpy, setFilters } = $_products.actions;