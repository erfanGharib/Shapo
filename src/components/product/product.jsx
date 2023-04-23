import imgDefaultProduct from '../../assets/images/products/default.svg'
import { ReactComponent as IcoPlus } from '../../assets/icons/plus.svg';
import { ReactComponent as IcoShoppingBag } from '../../assets/icons/shopping-bag.svg';
import Btn from '../btn';
import Price from '../price';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/reducers/_cart';
import imgNancyChair from '../../assets/images/featuredProducts/nancy-chair.png';
import { Link, useNavigate } from 'react-router-dom';

const Product = ({ data, className = '' }) => {
    const {
        id = null,
        name = 'نام محصول',
        imgUrl = imgDefaultProduct,
        price = 0,
        oldPrice = null,
        inventory = 0,
        qty = 1
    } = data;
    const pageLink = `product/${name}`;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const overlayBtns = [
        {
            ico: <IcoShoppingBag />,
            onClick: () => navigate(pageLink)
        },
        {
            ico: <IcoPlus />,
            onClick: () => dispatch(addToCart(data))
        }
    ]
    const calcPercent = () => {
        if (price >= oldPrice) console.error('newPrice cannot be lower than oldPrice or equal to');
        return 100 - (price * 100 / oldPrice);
    }

    return (
        <div className={`${className} flex flex-col items-center`}>
            <div className='w-full relative group'>
                <Link to={pageLink}>
                    <div className='aspect-square p-5 flex justify-center items-center bg-[#efeff1]'>
                        <img src={imgUrl} alt={name} className='w-full' />
                    </div>
                    <div className='overlay py-3.5 px-3 flex '>
                        {oldPrice ?
                            <span className='bg-orange-800 h-max text-white text-sm mr-auto leading-none circle'>
                                {calcPercent()}%
                            </span> :
                            null
                        }
                        {inventory > 0 ?
                            null :
                            <span className='bg-black text-white px-3 h-max py-1 text-sm'>ناموجود</span>
                        }
                    </div>
                    <div className='overlay group-hover:bg-opacity-30 duration-300 transition-color'>
                    </div>
                </Link>

                <div className='overlay z-10 gap-x-2 flex justify-center items-center'>
                    {overlayBtns.map(({ ico, onClick }, index) =>
                        <Btn
                            onClick={onClick}
                            key={index}
                            ico={ico}
                            style={{ transition: '400ms ' + index + '00ms' }}
                            className='hover:text-gold bg-white circle opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100'
                            icoSize='20px'
                        />
                    )}
                </div>
            </div>

            <Link to={pageLink}>
                <h3 className='mt-2'>{name}</h3>
            </Link>
            <Price price={price} oldPrice={oldPrice} className='text-gray-400 flex-row-reverse' />
        </div>
    );
}
export default Product;