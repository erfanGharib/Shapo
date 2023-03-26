import imgDefaultProduct from '../../assets/images/products/default.svg'
import TomanSign from '../tomanSign';
import {ReactComponent as IcoPlus} from '../../assets/icons/plus.svg';
import {ReactComponent as IcoHeart} from '../../assets/icons/heart.svg';
import {ReactComponent as IcoShoppingBag} from '../../assets/icons/shopping-bag.svg';
import Btn from '../btn';

const overlayBtns = [
    <IcoShoppingBag/>,
    <IcoHeart/>,
    <IcoPlus/>,
]

const Product = ({
    title = 'نام محصول',
    imgSrc = imgDefaultProduct,
    price = 0,
    oldPrice = '',
    exist = false,
    className
}) => {
    const calcPercent = () => {
        if (price >= oldPrice) console.error('newPrice cannot be lower than oldPrice or equal to');
        return 100 - (price * 100 / oldPrice);
    }
    const split = (num) => {
        return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    return (
        <div 
            className={`${className} flex flex-col items-center`}
            style={{scrollSnapAlign: 'center'}}
        >
            <div className='w-full relative group'>
                <img src={imgSrc} alt={title} className='h-full' />
                <div className='overlay py-3.5 px-3 flex '>
                    {oldPrice ?
                        <span className='bg-orange-800 h-max text-white text-sm mr-auto leading-none circle'>
                            {calcPercent()}%
                        </span> :
                        null
                    }
                    {exist ?
                        null :
                        <span className='bg-black text-white px-3 h-max py-1 text-sm'>ناموجود</span>
                    }
                </div>
                <div className='overlay gap-x-2 z-10 group-hover:bg-opacity-10 flex justify-center items-center transform duration-300 transition-color'>
                    {overlayBtns.map((ico, index) => 
                        <Btn
                            key={index}
                            ico={ico}
                            style={{transition: '400ms ' + index + '00ms'}}
                            className='bg-white circle opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100'
                            icoSize='20px'
                        />
                    )}
                </div>
            </div>

            <h3 className='mt-2'>{title}</h3>
            <span className='flex flex-col justify-center items-center'>
                {oldPrice ?
                    <s className='text-gray-400'>
                        {split(oldPrice)}
                        <TomanSign />
                    </s> :
                    null
                }
                <span className='text-gray-500'>
                    {split(price)}
                    <TomanSign />
                </span>
            </span>
        </div>
    );
}
export default Product;