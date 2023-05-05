import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQty } from "../../../store/reducers/_cart";
// import { setQty } from "../../../store/reducers/_qty";
import Btn from "../../btn";

const QtyInput = ({ setQty, currentQty = 1, productId, UPDATE_PRODUCT = true }) => {
    // const { qty } = useSelector(state => state.$_qty);
    const qty = useRef(currentQty);
    const dispatch = useDispatch();

    const changeQty = mark => {
        if(qty.current < 20 && mark === '+') {
            qty.current ++;
        }
        else if(qty.current > 1 && mark === '-') {
            qty.current --;
        }

        if (UPDATE_PRODUCT) {
            dispatch(updateQty({ id: productId, qty: qty.current }));
        }
        else {
            setQty(qty.current);
        }
    }

    return (
        <div className='border relative flex'>
            <Btn onClick={() => changeQty('-')}>–</Btn>
            <input
                type='number'
                className='p-0 bg-transparent border-none w-10 text-center'
                value={qty.current}
                readOnly
            />
            <Btn onClick={() => changeQty('+')}>+</Btn>
        </div>
    );
}
export default QtyInput; 