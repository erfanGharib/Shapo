import { setCurrentSlide } from '../../store/reducers/_mainSlider';
import { useDispatch } from 'react-redux';
import MainSlider from './mainSlider';
import { useEffect } from 'react';

const Header = () => {
    console.log('hello world');
    const dispatch = useDispatch();

    useEffect(() => {
        clearInterval();
        setInterval(() => {
            dispatch(setCurrentSlide());
        }, 3000);
    }, []);

    return (
        <div className='bg-gray-50 w-full h-[85vh] mb-32 overflow-hidden relative z-0'>
            <MainSlider />
        </div>
    );
}
export default Header;