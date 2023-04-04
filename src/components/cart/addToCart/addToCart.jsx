import Btn from "../../btn";
import QtyInput from "./qtyInput";

const AddToCart = () => {
    return (
        <div className='w-max flex gap-x-3 my-8'>
            <QtyInput />
            <Btn className='btn gold-btn'>افزودن به سبد خرید</Btn>
        </div>
    );
}
export default AddToCart; 