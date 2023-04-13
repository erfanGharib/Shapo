import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/reducers/_cart";
import Btn from "../../btn";
import 'notyf/notyf.min.css';

const AddToCart = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <Btn 
            onClick={() => dispatch(addToCart(product))}
            className='btn gold-btn'
        >
            افزودن به سبد خرید
        </Btn>
    );
}
export default AddToCart; 