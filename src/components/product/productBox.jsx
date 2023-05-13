import imgDefaultProduct from '../../assets/images/products/default.svg'
import { ReactComponent as IcoPlus } from '../../assets/icons/plus.svg';
import { ReactComponent as IcoShoppingBag } from '../../assets/icons/shopping-bag.svg';
import Btn from '../btn';
import Price from '../price';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/reducers/_cart';
import { Link, useNavigate } from 'react-router-dom';
import ProductLabels from './productLabels';

const Product = ({ data, className = '' }) => {
    const {
        name = 'نام محصول',
        imgUrl = imgDefaultProduct,
        price = 0,
        oldPrice = null,
        inventory = 0,
    } = data;
    const pageLink = `../product/${name}`;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const overlayBtns = [
        {
            enabled: true,
            ico: <IcoShoppingBag />,
            onClick: () => navigate(pageLink)
        },
        {
            enabled: !(inventory <= 0),
            ico: <IcoPlus />,
            onClick: () => dispatch(addToCart(data))
        },
    ];

    return (
        <div className={`${className} flex flex-col items-center`} style={{direction: 'rtl'}}>
            <div className='w-full relative group h-full'>
                <Link to={pageLink}>
                    <div className='aspect-square bg-[#efeff1]'>
                        <img src={imgUrl} alt={name} className='w-full' />
                    </div>
                    <ProductLabels price={price} oldPrice={oldPrice} inventory={inventory} />
                    <div className='overlay group-hover:bg-opacity-30 duration-300 transition-color'>
                    </div>
                </Link>

                <div className='overlay z-10 flex justify-center items-center flex-row-reverse'>
                    {overlayBtns.map(({ enabled, ico, onClick }, index) => (
                        enabled ?
                            <Btn
                                onClick={onClick}
                                key={index}
                                ico={ico}
                                style={{ transition: '400ms ' + index + '00ms' }}
                                className='mx-1 hover:text-gold bg-white circle opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100'
                            /> : null
                    ))}
                </div>
            </div>

            <Link to={pageLink}>
                <h3 className='mt-2'>{name}</h3>
            </Link>
            
            <Price price={price} oldPrice={oldPrice} className='text-gray-400' />
        </div>
    );
}
export default Product;