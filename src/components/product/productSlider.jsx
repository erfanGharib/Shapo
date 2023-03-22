import { useDispatch, useSelector } from "react-redux";
import Btn from "../btn";
import Product from "./product";
import icoAngleRight from '../../assets/icons/angle-right.svg'
import icoAngleLeft from '../../assets/icons/angle-left.svg'
import { goLeft, goRight, setLimit } from "../../store/reducers/_productSliderStatus";
import { useEffect } from "react";

const ProductSlider = ({ products, title = 'product slider' }) => {
    const dispatch = useDispatch();
    const { status } = useSelector(state => state.$_productSliderStatus);
    const productCount = 4;

    useEffect(() => {
        dispatch(setLimit(productCount));
    }, [])

    return (
        <div className="w-5/6 mx-auto flex flex-col items-center">
            <h2 className='text-3xl flex items-center flex-col'>{title}</h2>

            <div className='w-full flex justify-center items-center'>
                <Btn icoSrc={icoAngleRight} onClick={() => dispatch(goRight())} className='md:!block !hidden' />
                <div className='min-w-full overflow-hidden'>
                    <div
                        className='mt-7 productSlider pb-5 flex gap-x-3 md:gap-x-5 -z-10 overflow-x-scroll md:overflow-x-visible transition-transform duration-300'
                        style={{ 
                            direction: 'ltr',
                            scrollSnapType: 'x mandatory',
                            transform: `translatex(${status}%)`
                        }}
                    >
                        <Product className='md:min-w-[23.5%] md:max-w-[23.5%] min-w-[48%] max-w-[48%]' />
                        <Product className='md:min-w-[23.5%] md:max-w-[23.5%] min-w-[48%] max-w-[48%]' />
                        <Product className='md:min-w-[23.5%] md:max-w-[23.5%] min-w-[48%] max-w-[48%]' />
                        <Product className='md:min-w-[23.5%] md:max-w-[23.5%] min-w-[48%] max-w-[48%]' />
                    </div>
                </div>
                <Btn icoSrc={icoAngleLeft} onClick={() => dispatch(goLeft())} className='md:!block !hidden' />
            </div>
        </div>
    );
}
export default ProductSlider;