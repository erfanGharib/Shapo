import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageInfo from '../components/pageInfo';
import Price from '../components/price';
import Btn from '../components/btn';
import Input from '../components/input';
import { ReactComponent as IcoClose } from '../assets/icons/close.svg';
import { ReactComponent as IcoArrowLeft } from '../assets/icons/arrow-left.svg';
import Ico from '../components/ico';
import { Link } from 'react-router-dom';
import imgDefaultProduct from '../assets/images/products/default.svg'

const Cart = () => {
    const { data: cartData } = useSelector(state => state.$_cart);
    const dispatch = useDispatch();
    const totalPrice = useRef(0);

    cartData.forEach(({ price }) => totalPrice.current += price);

    return (
        <>
            <PageInfo title='سبد خرید' path='سبد خرید' />
            <div className='mainPart !gap-7 flex-col md:!flex-row !items-start'>
                <div className='w-full md:w-2/3'>
                    <div class="relative overflow-x-auto w-full">
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
                                {/* {
                                    cartData.map(({ imgSrc, name, price, qty }) => ( */}
                                <tr class="bg-gray-50 border-b">
                                    <th scope="row" class="gap-3 w-max flex px-5 py-4 items-center font-medium text-gray-900">
                                        <img src={imgDefaultProduct} alt='' className='border w-14' />
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td class="px-5 py-4">
                                        Silver
                                    </td>
                                    <td class="px-5 py-4">
                                        Laptop
                                    </td>
                                    <td class="px-5 py-4">
                                        <div className='w-full flex justify-between items-center'>
                                            <Price price={2999} />
                                            <Btn ico={<IcoClose className='w-5 h-5 mt-1' />} />
                                        </div>
                                    </td>
                                </tr>
                                {/* // ))
                                // } */}

                            </tbody>
                        </table>
                    </div>
                    <div className='w-full gap-3 flex-wrap flex md:w-80 mt-5'>
                        <Input className='!w-[51%]' placeholder='کد تخفیف' />
                        <Btn className='btn general-btn w-[45%]'>اعمال کد تخفیف</Btn>
                    </div>
                </div>
                {/* <div className='w-full flex justify-between'>
                    <Btn className='danger-btn btn'>پاک کردن سبد خرید</Btn>

                </div> */}
                <div className='flex flex-col w-full md:w-1/3'>
                    <div className='flex flex-col gap-3 border p-5'>
                        <span className='text-xl'>جمع کل سبد خرید</span>
                        <div className='flex justify-between items-center'>
                            <h3>مجموع قیمت:</h3>
                            <h3>{'totalPrice.current'}</h3>
                        </div>
                        <Btn className='btn gold-btn w-full'>اقدام به پرداخت</Btn>
                        <Link to='/shop' className='w-full'>
                            <Btn
                                className='primary-btn btn w-full'
                                ico={<IcoArrowLeft className='w-5 h-5 mt-0.5 mr-1' />}
                            >ادامه خرید</Btn>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
}
export default Cart;