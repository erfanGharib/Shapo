import { Link } from "react-router-dom";
// import Ico from "../ico";
import Btn from '../btn'
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../store/reducers/_cart";
import { ReactComponent as IcoClose } from '../../assets/icons/close.svg';
import { useRef } from "react";

const CartSidebar = () => {
    const { data: cartData } = useSelector(state => state.$_cart);
    const dispatch = useDispatch();
    const totalPrice = useRef(0);
    
    cartData.forEach(({ price }) => totalPrice.current += price);

    return (
        <>
            {cartData.length !== 0 ?
                <>
                    <div className='flex flex-col gap-y-2'>
                        {
                            cartData.map(({ imgSrc, name, price, qty }) => (
                                <div className='flex w-full h-20 bg-black'>
                                    <img src={imgSrc} alt={name} />

                                    <div className='flex flex-col'>
                                        <span>{name}</span>
                                        <span>{qty}</span>
                                        <span>{price}</span>
                                    </div>

                                    <Btn
                                        ico={<IcoClose />}
                                        onClick={() => dispatch(removeFromCart())}
                                        className='w-max'
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <div className='flex justify-between'>
                        <h3>مجموع قیمت:</h3>
                        <h3>{totalPrice.current}</h3>
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