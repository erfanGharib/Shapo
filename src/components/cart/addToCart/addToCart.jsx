import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/reducers/_cart";
import Btn from "../../btn";
import 'notyf/notyf.min.css';

const AddToCart = ({ className = 'gold-btn', product, disabled, children = 'افزودن به سبد خرید' }) => {
    const dispatch = useDispatch();

    return (
        <Btn 
            disabled={disabled}
            onClick={() => dispatch(addToCart(product))}
            className={`${className} btn`}
        >
            {children}
        </Btn>
    );
}
export default AddToCart; 