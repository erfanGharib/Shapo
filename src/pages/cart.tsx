import { useDispatch, useSelector } from 'react-redux';
import PageInfo from '../components/pageInfo';
import Price from '../components/price';
import Btn from '../components/btn';
import Input from '../components/input';
import { Link } from 'react-router-dom';
import { T_Cart, removeFromCart } from '../store/reducers/_cart';
import QtyInput from '../components/cart/addToCart/qtyInput';
import { calcTotalPrice } from '../utils/calcTotalPrice';
import { T_AppStoreReducers } from '../store';
import ArrowLeft from '../assets/icons/arrow-left';
import Close from '../assets/icons/close';

const Cart = () => {
    const { data: cartData } = useSelector<T_AppStoreReducers, T_Cart>(state => state.$_cart);
    const dispatch = useDispatch();
    console.log(cartData);

    return (
        <>
            <PageInfo title='سبد خرید' path='سبد خرید' />
            <div className='mainPart flex-col md:!flex-row !items-start'>
                <div className='w-full md:w-2/3 md:ml-5'>
                    <div className="relative overflow-x-auto w-full">
                        <table className="text-right w-full">
                            <thead className="text-sm text-gray-400 bg-gray-200 border-b bg-opacity-80">
                                <tr className='font-normal'>
                                    <th scope="col" className="px-5 py-3">
                                        محصول
                                    </th>
                                    <th scope="col" className="px-5 py-3">
                                        قیمت
                                    </th>
                                    <th scope="col" className="px-5 py-3">
                                        تعداد
                                    </th>
                                    <th scope="col" className="px-5 py-3">
                                        مجموع قیمت
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='text-sm text-gray-700 bg-gray-50'>
                                {cartData.map(({ imgUrl, name, price, qty, id }, index) => (
                                    <tr key={index} className="bg-gray-50 border-b">
                                        <td scope="row" className="space-3 w-max flex items-center font-medium text-gray-900">
                                            <div className='w-16 p-1 ml-3 aspect-square border flex justify-center items-center bg-[#efeff1]'>
                                                <img src={imgUrl} alt={name} className='w-full' />
                                            </div>
                                            {name}
                                        </td>
                                        <td>
                                            <Price price={price}/>
                                        </td>
                                        <td>
                                            <QtyInput currentQty={qty} productId={id} />
                                        </td>
                                        <td>
                                            <div className='w-full flex justify-between items-center'>
                                                <Price className='min-w-[110px]' price={price * qty} />
                                                <Btn
                                                    onClick={() => dispatch(removeFromCart(id))} 
                                                    ico={<Close className='w-5 h-5' />}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='w-full space-3 flex-wrap flex md:w-80 mt-5 md:mb-0 mb-5'>
                        <Input
                            disabled={cartData.length === 0} 
                            className='!w-[51%]' placeholder='کد تخفیف' 
                        />
                        <Btn 
                            className='btn general-btn w-[45%] mr-auto'
                            disabled={cartData.length === 0}
                        >اعمال کد تخفیف</Btn>
                    </div>
                </div>
                {/* <div className='w-full flex justify-between'>
                    <Btn className='danger-btn btn'>پاک کردن سبد خرید</Btn>

                </div> */}
                <div className='flex flex-col w-full md:w-1/3'>
                    <div className='flex flex-col border p-5'>
                        <span className='text-xl mb-4'>جمع کل سبد خرید</span>
                        <div className='flex justify-between items-center'>
                            <h3>مجموع قیمت:</h3>
                            <h3><Price price={calcTotalPrice(cartData)} /></h3>
                        </div>
                        <Btn 
                            className='btn gold-btn w-full my-2' 
                            disabled={cartData.length === 0}
                        >اقدام به پرداخت</Btn>
                        <Link to='/shop' className='w-full'>
                            <Btn
                                className='primary-btn btn w-full'
                                ico={<ArrowLeft className='w-5 h-5 mt-0.5 mr-1' />}
                            >ادامه خرید</Btn>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Cart;