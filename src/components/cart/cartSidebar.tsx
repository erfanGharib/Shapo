import { Link } from "react-router-dom";
import Btn from '../btn'
import { useDispatch, useSelector } from "react-redux";
import Price from "../price";
import { setStatus } from "../../store/reducers/_sidebarStatus";
import MiniProductBox from "../product/miniProductBox";
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { T_AppStoreReducers } from "../../store";
import { T_Cart } from "../../store/reducers/_cart";

const CartSidebar = () => {
    const { data: cartData } = useSelector<T_AppStoreReducers, T_Cart>(state => state.$_cart);
    const dispatch = useDispatch();

    return (
        <>
            {cartData.length !== 0 ?
                <>
                    <div className='flex w-full flex-col'>
                        {
                            cartData.map((data, index) => 
                                <MiniProductBox key={index} {...data} productId={data.id} />
                            )
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