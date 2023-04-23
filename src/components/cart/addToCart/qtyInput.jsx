import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQty } from "../../../store/reducers/_cart";
import Btn from "../../btn";

const QtyInput = ({ currentQty = 1, disabled, productId }) => {
    // const [qty, setQty] = useState(currentQty);
    
    // const { data: cartData } = useSelector(state => state.$_cart);
    const dispatch = useDispatch();

    const changeQty = mode => {
        if (mode === 'plus' && currentQty < 20) dispatch(setQty({ id: productId, qty: currentQty + 1}));
        else if (mode === 'minus' && currentQty > 1) dispatch(setQty({ id: productId, qty: currentQty - 1}));
    }

    return (
        <div className='border relative flex'>
            <Btn onClick={() => changeQty('minus')} disabled={disabled}>–</Btn>
            <input
                type='number'
                className='p-0 bg-transparent border-none w-10 text-center'
                value={currentQty}
                readOnly
                max='20'
                min='1'
                disabled={disabled}
            />
            <Btn onClick={() => changeQty('plus')} disabled={disabled}>+</Btn>
        </div>
    );
}
export default QtyInput; 