import { useDispatch } from "react-redux";
import { updateQty } from "../../../store/reducers/_cart";
import Btn from "../../btn";
import { useRef } from "react";

type T_Props = {
    setQty?: (newVal: number) => void;
    currentQty?: number;
    productId?: number
}

const QtyInput = ({ setQty, currentQty = 1, productId }: T_Props) => {
    const dispatch = useDispatch();
    const qty = useRef(currentQty);

    const changeQty = (mark: '-' | '+') => {
        if(qty.current < 20 && mark === '+') {
            qty.current ++;
        }
        else if(qty.current > 1 && mark === '-') {
            qty.current --;
        }

        if (productId) {
            dispatch(updateQty({ id: productId, qty: qty.current }));
        }
        else {
            if(!setQty)
                throw Error(`No setQty function provided: \`${setQty}\``)
            
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