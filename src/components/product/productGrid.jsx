import Btn from "../btn";
import Product from "./product";
import { ReactComponent as IcoThreeDots } from '../../assets/icons/three-dots.svg';
import { ReactComponent as IcoFourDots } from '../../assets/icons/four-dots.svg';
import { useState } from "react";
import PageCounter from "../pageCounter";
import { IS_WIDTH_768px } from "../..";
import { useSelector } from "react-redux";

const ProductGrid = () => {
    const [productGridCols, setProductGridCols] = useState(3);
    const { currentPage } = useSelector(state => state.$_pageCounter);
    const { products, productsCpy } = useSelector(state => state.$_products);

    /**
     * PageCounter implemention:
     * put target products index in @productsIndex
     * example: 0, 1, ... , 8 || 9, 10, ... , 17

     * map on @productsIndex and load elements
     *** index < 9 * currentPage && products[value] !== undefined
     * load products from 0 to 8 || 9 to 17
     * and check it is undefined or no
    */
    const productsIndex = productsCpy.map((_, index) => 
        index = index + (9 * (currentPage - 1))
    );
    
    return (
        <div className="lg:w-2/3 w-full mx-auto flex flex-col items-center lg:ml-7">
            <div className='w-full mb-3 h-10 flex items-center justify-between'>
                <span>
                    <span className='ml-2'>نشان دادن</span>
                    <span>
                        {productsCpy.length - 9 * (currentPage - 1)}
                        <span className='mx-2'>از</span>
                        {products.length}
                    </span>
                </span>

                {IS_WIDTH_768px ?
                    null :
                    <div className="flex">
                        <Btn
                            ico={<IcoFourDots />}
                            className={productGridCols === 3 ? 'opacity-40' : ''}
                            onClick={() => setProductGridCols(4)}
                        />
                        <Btn
                            ico={<IcoThreeDots />}
                            className={productGridCols === 4 ? 'opacity-40' : ''}
                            onClick={() => setProductGridCols(3)}
                        />
                    </div>
                }
            </div>

            <div className='-mx-2.5'>
                <div className={`${productGridCols === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'} grid-cols-2 grid w-full`}>
                    {productsIndex.map((value, index) => 
                        index < 9 * currentPage && productsCpy[value] !== undefined ? 
                            <Product
                                data={productsCpy[value]}
                                key={index}
                                className='mb-5 mx-2.5'
                            /> : 
                            null
                    )}
                </div>
            </div>

            <PageCounter pageCount={Math.ceil(productsCpy.length / 9)} />
        </div>
    );
}
export default ProductGrid;