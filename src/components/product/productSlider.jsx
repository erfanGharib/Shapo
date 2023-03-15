import { useDispatch, useSelector } from "react-redux";
import Btn from "../btn";
import Product from "./product";
import angleRight from '../../assets/icons/angle-right.svg'
import angleLeft from '../../assets/icons/angle-left.svg'
import { setLimit, setStatus } from "../../store/reducers/_productSliderStatus";
import { useEffect } from "react";

const ProductSlider = ({ products, title = 'product slider' }) => {
    const dispatch = useDispatch();
    const { status } = useSelector(state => state.$_productSliderStatus);
    const productCount = 7;

    useEffect(() => {
        dispatch(setLimit(productCount));
    }, [])

    return (
        <div className="w-5/6 mx-auto flex flex-col items-center">
            <h2 className='text-3xl flex items-center flex-col'>{title}</h2>

            <div className='w-full flex justify-center'>
                <Btn icoSrc={angleRight} onClick={() => dispatch(setStatus('plus'))} />
                <div className='min-w-full relative overflow-x-hidden'>
                    <div
                        className='mt-7 flex gap-x-5 -z-10 justify-end transition-transform duration-300'
                        style={{ transform: `translatex(${status}%)` }}
                    >
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </div>
                <Btn icoSrc={angleLeft} onClick={() => dispatch(setStatus('minus'))} />
            </div>
        </div>
    );
}
export default ProductSlider;