import MainSlider from './slider';
import { useEffect, useRef } from 'react';
import SliderStatus from './sliderStatus';
import { useDispatch, useSelector } from 'react-redux';
import { T_SliderStatus, setCurrentSlide } from '../../store/reducers/_sliderStatus';
import { T_AppStoreReducers } from '../../store';

let RUN_INTERVAL = true;
const Header = () => {
    const dispatch = useDispatch();
    // specify slider items length
    const containerRef = Array.from({ length: 3 }).map(() => useRef<HTMLDivElement>());
    const sliderRef = useRef<HTMLDivElement>();
    const { status } = useSelector<T_AppStoreReducers, T_SliderStatus>(state => state.$_sliderStatus);

    const toggleStyles = () => {
        containerRef[status].current.lastElementChild.childNodes.forEach((val: HTMLDivElement) => {
            val.classList.add('!translate-y-0', '!opacity-100');
            setTimeout(() => {
                val.classList.remove('!translate-y-0', '!opacity-100');
            }, 4500)
        })
    }

    useEffect(() => {
        if(RUN_INTERVAL) {
            setInterval(() => {
                dispatch(setCurrentSlide());
            }, 5000);
        }

        RUN_INTERVAL = false;
    }, []);
    
    useEffect(() => {
        toggleStyles();
        sliderRef.current.style.transform = `translateX(${status}00%)`;
    },[status]);

    return (
        <div className='bg-gray-50 w-full max-h-[1000px] h-[85vh] -mt-20 md:mb-32 mb-24 overflow-hidden relative z-0'>
            <MainSlider
                containerRef={containerRef}
                sliderRef={sliderRef}
            />
            <SliderStatus length={containerRef.length} />
        </div>
    );
}
export default Header;