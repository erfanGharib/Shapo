import { createSlice } from '@reduxjs/toolkit';
import imgSlider1 from '../../assets/images/mainSlider/1.jpg'
import imgSlider2 from '../../assets/images/mainSlider/2.jpg'
import imgSlider3 from '../../assets/images/mainSlider/3.jpg'

const slides = [
    {
        imgSrc: imgSlider1,
        supTitle: 'مجموعه صندلی های 1401',
        title: 'به فروشگاه شاپو خوش آمدید',
        desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'
    },
    {
        imgSrc: imgSlider2,
        supTitle: 'مجموعه صندلی های 1401',
        title: 'به فروشگاه شاپو خوش آمدید',
        desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'
    },
    {
        imgSrc: imgSlider3,
        supTitle: 'مجموعه صندلی های 1401',
        title: 'به فروشگاه شاپو خوش آمدید',
        desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'
    },
]
export const $_mainSlider = createSlice({
    name: '_mainSlider',
    initialState: {
        status: 0,
        slide: slides[0],
    },
    reducers: {
        setCurrentSlide: state => {
            state.slide = slides[state.status];

            if(state.status === 2) state.status = 0;
            else state.status += 1;
        },
    }
});

export const { setCurrentSlide } = $_mainSlider.actions;