import { useDispatch } from "react-redux";
import Btn from "../../btn";
import {addToCart} from '../../../store/reducers/_cart' 

const AddToCart = ({ className = '', product, disabled, children = 'افزودن به سبد خرید' }) => {
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