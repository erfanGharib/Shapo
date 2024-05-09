import { useDispatch } from "react-redux";
import Btn from "../../btn";
import {addToCart} from '../../../store/reducers/_cart' 
import { T_Product } from "../../../data/productData";

type T_Props = { 
    className?: string
    product?: T_Product;
    disabled?: boolean
    children?: string
}

const AddToCart = ({ className = '', product, disabled, children = 'افزودن به سبد خرید' }: T_Props) => {
    const dispatch = useDispatch();
    
    return (
        <Btn 
            disabled={disabled}
            onClick={() => dispatch(addToCart(product))}
            className={`${className} gold-btn btn`}
        >
            {children}
        </Btn>
    );
}
export default AddToCart; 