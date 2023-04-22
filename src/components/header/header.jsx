import MainSlider from './slider';
import { useEffect, useRef } from 'react';
import SliderStatus from './sliderStatus';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSlide } from '../../store/reducers/_sliderStatus';

let RUN_INTERVAL = true;
const Header = () => {
    const dispatch = useDispatch();
    const containerRef = [
        useRef(),
        useRef(),
        useRef(),
    ];
    const sliderRef = useRef();
    const { status } = useSelector(state => state.$_sliderStatus);

    const toggleStyles = () => {
        containerRef[status].current.lastElementChild.childNodes.forEach(({ classList }) => {
            classList.add('!translate-y-0', '!opacity-100');
            setTimeout(() => {
                classList.remove('!translate-y-0', '!opacity-100');
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
        sliderRef.current.style.transform = `translatex(${status}00%)`;
    },[status]);

    return (
        <div className='bg-gray-50 w-full h-[85vh] -mt-20 md:mb-32 mb-24 overflow-hidden relative z-0'>
            <MainSlider
                containerRef={containerRef}
                sliderRef={sliderRef}
            />
            <SliderStatus />
        </div>
    );
}
export default Header;