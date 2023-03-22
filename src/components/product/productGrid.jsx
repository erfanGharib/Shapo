import Btn from "../btn";
import Product from "./product";
import icoAngleDown from '../../assets/icons/angle-down.svg';
import icoThreeDots from '../../assets/icons/three-dots.svg';
import icoFourDots from '../../assets/icons/four-dots.svg';
import Ico from "../ico";
import { useState } from "react";

const ProductGrid = ({ products, title }) => {
    const [productGridCols, setProductGridCols] = useState(3);
    const is768px = window.screen.width <= 768;
    return (
        <div className="md:w-2/3 w-full mx-auto flex flex-col items-center">
            {
                title !== undefined ?
                    <h2 className='text-3xl mb-7 flex items-center flex-col'>{title}</h2> :
                    null
            }
            <div className='w-full mb-3 h-10 flex items-center justify-between'>
                <span>
                    نشان دادن
                    9 از 19
                </span>

                {is768px ?
                    null :
                    <div>
                        <Btn
                            icoSrc={icoFourDots}
                            className={productGridCols === 3 ? 'opacity-50' : ''}
                            onClick={() => setProductGridCols(4)}
                        />
                        <Btn
                            icoSrc={icoThreeDots}
                            className={productGridCols === 4 ? 'opacity-50' : ''}
                            onClick={() => setProductGridCols(3)}
                        />
                    </div>
                }
            </div>

            <div className={`${productGridCols === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'} grid-cols-2 grid gap-5 w-full`}>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>

            <div className='w-full my-3 h-20 flex justify-center items-center gap-x-3' id='pageCounter'>
                <Btn>قبلی</Btn>
                <Btn className='gold-btn'>1</Btn>
                <Btn>2</Btn>
                <Btn>بعدی</Btn>
            </div>
        </div>
    );
}
export default ProductGrid;