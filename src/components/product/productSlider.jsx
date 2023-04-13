import { useDispatch, useSelector } from "react-redux";
import Btn from "../btn";
import Product from "./product";
import {ReactComponent as IcoAngleRight} from '../../assets/icons/angle-right.svg'
import {ReactComponent as IcoAngleLeft} from '../../assets/icons/angle-left.svg'
import { goLeft, goRight, setConfig } from "../../store/reducers/_productSliderStatus";
import { useEffect } from "react";
import IS_WIDTH_768px from "../..";

const ProductSlider = ({ products, title = 'product slider' }) => {
    const dispatch = useDispatch();
    const { status, config } = useSelector(state => state.$_productSliderStatus);
    const btnCssClasses = 'block md:relative !min-w-[30px] absolute -translate-y-5 transform'
    const productCount = 5;

    useEffect(() => {
        if(IS_WIDTH_768px) {
            console.log('ss');
            dispatch(setConfig({
                limit: productCount,
                translation: 52,
                cols: 2,
            }));
        }
        else {
            dispatch(setConfig({
                ...config,
                limit: productCount,
            }));
        }
    }, [])

    return (
        <div className="w-5/6 mx-auto flex flex-col items-center">
            <h2 className='text-3xl flex items-center flex-col'>{title}</h2>

            <div className='w-full flex justify-center items-center'>
                <Btn ico={<IcoAngleRight/>} onClick={() => dispatch(goRight())} className={`md:-right-3 right-0 ${btnCssClasses}`} />
                <div className='min-w-full overflow-hidden'>
                    <div
                        className='mt-7 productSlider pb-5 flex -z-10 overflow-x-visible transition-transform duration-300'
                        style={{ 
                            direction: 'ltr',
                            transform: `translatex(${status}%)`
                        }}
                    >
                        <Product className='md:min-w-[25.5%] md:max-w-[25.5%] min-w-[52%] max-w-[52%] md:pr-5 pr-3' />
                        <Product className='md:min-w-[25.5%] md:max-w-[25.5%] min-w-[52%] max-w-[52%] md:pr-5 pr-3' />
                        <Product className='md:min-w-[25.5%] md:max-w-[25.5%] min-w-[52%] max-w-[52%] md:pr-5 pr-3' />
                        <Product className='md:min-w-[25.5%] md:max-w-[25.5%] min-w-[52%] max-w-[52%] md:pr-5 pr-3' />
                        <Product className='md:min-w-[25.5%] md:max-w-[25.5%] min-w-[52%] max-w-[52%] md:pr-5 pr-3' />
                    </div>
                </div>
                <Btn ico={<IcoAngleLeft/>} onClick={() => dispatch(goLeft())} className={`md:-left-3 left-0 ${btnCssClasses}`} />
            </div>
        </div>
    );
}
export default ProductSlider;