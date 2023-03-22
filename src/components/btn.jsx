import { Link } from "react-router-dom";
import Ico from './ico';

const Btn = ({ count, icoSrc, className, icoSize, disabled, style, onClick, children }) => {
    return (
        <button
            style={{ ...style }}
            disabled={disabled}
            className={`${className} min-w-[48px] px-3 h-12 text-black relative md:cursor-pointer cursor-default`}
            onClick={onClick}
        >
            {icoSrc === undefined ?
                null :
                <Ico src={icoSrc} style={{ width: icoSize, height: icoSize }} className='mx-auto' />
            }
            {count === undefined ?
                null :
                <span className='rounded-full bg-gold p-1.5 pb-0.5 text-xs leading-3 text-black absolute right-0 -bottom-1'>
                    {count}
                </span>
            }
            {children}
        </button>
    );
}
export default Btn;