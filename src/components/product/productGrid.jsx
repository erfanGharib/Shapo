import Btn from "../btn";
import Product from "./product";
import {ReactComponent as IcoThreeDots} from '../../assets/icons/three-dots.svg';
import {ReactComponent as IcoFourDots} from '../../assets/icons/four-dots.svg';
import { useState } from "react";
import PageCounter from "../pageCounter";

const ProductGrid = ({ products, title = true }) => {
    const [productGridCols, setProductGridCols] = useState(3);
    const is768px = window.screen.width <= 768;
    return (
        <div className="md:w-2/3 w-full mx-auto flex flex-col items-center">
            {/* {
                title ?
                    <h2 className='text-3xl mb-7 flex items-center flex-col'>{title}</h2> :
                    null
            } */}
            <div className='w-full mb-3 h-10 flex items-center justify-between'>
                <span>
                    نشان دادن
                    9 از 19
                </span>

                {is768px ?
                    null :
                    <div>
                        <Btn
                            ico={<IcoFourDots/>}
                            className={productGridCols === 3 ? 'opacity-50' : ''}
                            onClick={() => setProductGridCols(4)}
                        />
                        <Btn
                            ico={<IcoThreeDots/>}
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

            <PageCounter pageCount={3} currentPage={1} />
        </div>
    );
}
export default ProductGrid;