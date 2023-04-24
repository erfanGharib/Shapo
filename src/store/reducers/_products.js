import { createSlice } from '@reduxjs/toolkit';
import { productData } from '../../data/productData';

export const $_products = createSlice({
    name: '_products',
    initialState: {
        data: productData,
    }
});