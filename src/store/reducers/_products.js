import { createSlice } from '@reduxjs/toolkit';
import imgNancyChair from '../../assets/images/featuredProducts/nancy-chair.png';
import imgArtDecoHome from '../../assets/images/featuredProducts/art-deco-home.png';
import imgTableWoodPine from '../../assets/images/featuredProducts/table-wood-pine.png';

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
                desc: 'این صندلی یک صندلی عالی است',
                imgSrc: imgNancyChair,
                cat: 'مبلمان',
                tag: 'صندلی'
            },
            {
                id: 2,
                name: 'میز چوب کاج',
                price: 1_500_000,
                oldPrice: null,
                inventory: 4,
                desc: 'این میز یک میز عالی است',
                imgSrc: imgTableWoodPine,
                cat: 'مبلمان',
                tag: 'میز'
            },
            {
                id: 3,
                name: 'گلدان چوبی',
                price: 100_000,
                oldPrice: null,
                inventory: 8,
                desc: 'این گلدان یک گلدان عالی است',
                imgSrc: imgArtDecoHome,
                cat: 'دکوراسیون',
                tag: 'دکور'
            },
        ]
    },
    reducers: {
        goRight: state => {
            if(state.status !== -((state.limit - 4) * state.translation)) 
                state.status -= state.translation;
        },
    }
});

export const { goRight } = $_products.actions;