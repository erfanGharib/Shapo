import { Link } from "react-router-dom";
import Btn from '../btn'
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../store/reducers/_cart";
import { ReactComponent as IcoClose } from '../../assets/icons/close.svg';
import { useRef } from "react";
import Price from "../price";

const CartSidebar = () => {
    const { data: cartData } = useSelector(state => state.$_cart);
    const dispatch = useDispatch();

    const calcTotalPrice = () => {
        let totalPrice = 0;
        cartData.forEach(({ price }) => totalPrice += price);
        return totalPrice;
    }

    return (
        <>
            {cartData.length !== 0 ?
                <>
                    <div className='flex flex-col gap-y-3'>
                        {
                            cartData.map(({ imgUrl, name, price, qty, id }) => (
                                <div className='flex gap-x-5 items-center w-full border-b pb-3'>                                    
                                    <div className='w-24 aspect-square p-4 flex justify-center items-center bg-[#efeff1]'>
                                        <img src={imgUrl} alt={name} className='w-full' />
                                    </div>

                                    <div className='flex justify-center flex-col'>
                                        <span className='text-lg'>{name}</span>
                                        <span>{qty}</span>
                                        <Price className='text-gray-400' price={price} />
                                    </div>

                                    <Btn
                                        ico={<IcoClose />}
                                        onClick={() => dispatch(removeFromCart(id))}
                                        className='!min-w-[20px] mr-auto'
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <div className='flex justify-between'>
                        <h3>مجموع قیمت:</h3>
                        <Price className='text-green-600' price={calcTotalPrice()} />
                    </div>

                    <div className='flex flex-col gap-y-2'>
                        <Btn className='w-full btn general-btn'>
                            نمایش سبد خرید
                        </Btn>
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