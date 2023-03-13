import icoPlus from '../../assets/icons/plus.svg';
import icoHeart from '../../assets/icons/heart.svg';
import icoShoppingBag from '../../assets/icons/shopping-bag.svg';
import Btn from '../btn';

const Product = () => {
    return (
        <div className='overlay z-10 gap-x-1.5 group-hover:bg-opacity-10 flex justify-center items-center transform duration-300 transition-color'>
            <Btn
                icoSrc={icoHeart}
                className='bg-white circle'
                icoSize='20px'
            />
            <Btn
                icoSrc={icoShoppingBag}
                className='bg-white circle'
                icoSize='20px'
                disabled={!exist}
            />
            <Btn
                icoSrc={icoPlus}
                className='bg-white circle'
                icoSize='20px'
            />
        </div>
    );
}
export default Product;