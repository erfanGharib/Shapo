import { Link } from "react-router-dom";
import Btn from '../btn'
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../store/reducers/_cart";
import { ReactComponent as IcoClose } from '../../assets/icons/close.svg';
import Price from "../price";
import { setStatus } from "../../store/reducers/_sidebarStatus";
import { calcTotalPrice } from "../../App";

const CartSidebar = () => {
    const { data: cartData } = useSelector(state => state.$_cart);
    const dispatch = useDispatch();

    return (
        <>
            {cartData.length !== 0 ?
                <>
                    <div className='flex w-full flex-col'>
                        {
                            cartData.map(({ imgUrl = '', name = '', price = '', qty = 1, id = '' }, index) => (
                                <div key={index} className='mb-3 flex items-center w-full border-b pb-3'>                                    
                                    <div className='w-24 aspect-square ml-5 flex justify-center items-center bg-[#efeff1]'>
                                        <img src={imgUrl} alt={name} className='w-full' />
                                    </div>

                                    <div className='flex justify-center flex-col'>
                                        <span className='text-lg'>{name}</span>
                                        <span className='text-sm'>تعداد: {qty}</span>
                                        <Price className='text-gray-400' price={price*qty} />
                                    </div>

                                    <Btn
                                        ico={<IcoClose className='w-5 h-5 opacity-50' />}
                                        onClick={() => dispatch(removeFromCart(id))}
                                        className='!min-w-[20px] mr-auto mb-auto'
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <div className='flex justify-between w-full'>
                        <h3>مجموع قیمت:</h3>
                        <Price className='text-green-700' price={calcTotalPrice(cartData)} />
                    </div>

                    <div className='flex w-full flex-col space-y-2'>
                        <Link to='/cart'>
                            <Btn onClick={() => dispatch(setStatus())} className='w-full btn general-btn'>
                                نمایش سبد خرید
                            </Btn>
                        </Link>
                        <Btn className='w-full btn primary-btn'>
                            تسویه حساب
                        </Btn>
                    </div>
                </> :
                <h4 className='text-gray-400 mx-auto -mt-5'>در حال حاضر سبد خرید شما خالی است.</h4>
            }
        </>
    );
}
export default CartSidebar;