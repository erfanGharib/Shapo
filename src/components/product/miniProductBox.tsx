import Btn from '../btn'
import { removeFromCart } from "../../store/reducers/_cart";
import Price from "../price";
import { useDispatch } from 'react-redux';
import Close from '../../assets/icons/close';
import { FormEvent } from 'react';
import { T_Product } from '../../data/productData';

type T_Props = { 
    className?: string,
    closeBtn?: boolean,
    onClick?: (event: FormEvent<HTMLDivElement>) => void,
    productId: T_Product['id']
} & T_Product

const MiniProductBox = ({ className = '', closeBtn = true, onClick, imgUrl, name, qty, price, productId }: T_Props) => {
    const dispatch = useDispatch();
    
    return (
        <div className={`${className} mb-3 flex items-center w-full border-b pb-3`} onClick={onClick}>
            <div className='w-24 aspect-square ml-5 flex justify-center items-center bg-[#efeff1]'>
                <img src={imgUrl} alt={name} className='w-full' />
            </div>

            <div className='flex justify-center flex-col'>
                <span className='text-lg'>{name}</span>
                {qty !== undefined ? 
                    <span className='text-sm'>تعداد: {qty}</span> : null
                }
                <Price className='text-gray-400' price={price * (qty || 1)} />
            </div>

            {closeBtn ?
                <Btn
                    ico={<Close className='w-5 h-5 opacity-50' />}
                    onClick={() => dispatch(removeFromCart(productId))}
                    className='!min-w-[20px] mr-auto mb-auto'
                /> : null
            }
        </div>
    );
}
export default MiniProductBox;