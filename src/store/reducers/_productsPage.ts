import { createSlice } from '@reduxjs/toolkit';
import { productData } from '../../data/productData';

export type T_ProductsPage = {
    products: typeof productData,
    productsCpy: typeof productData,
    filters: {
        exist: boolean | null,
        cat: T_ProductsPage['categories'][number] | null,
        name: string | null,
        offered: boolean | null,
        priceRange: [number, number] | null,
    },
    categories: [
        'اکسسوری',
        'دکوراسیون',
        'مبلمان'
    ],
}

const initialState: T_ProductsPage = {
    products: productData,
    productsCpy: productData,
    filters: {
        exist: null,
        cat: null,
        name: null,
        offered: null,
        priceRange: null,
    },
    categories: [
        'اکسسوری',
        'دکوراسیون',
        'مبلمان'
    ]
}

export const $_productsPage = createSlice({
    name: '_productsPage',
    initialState,
    reducers: {
        setProductsCpy: ((state, { payload }: { payload: T_ProductsPage['productsCpy'] }) => {
            state.productsCpy = payload;
        }),
        setFilters: ((state, { payload }: { payload: T_ProductsPage['filters'] }) => {
            state.filters = payload
        }),
    }
});
export const { setProductsCpy, setFilters } = $_productsPage.actions;