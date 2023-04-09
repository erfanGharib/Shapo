import { Link } from "react-router-dom";
import Ico from './ico';

const Btn = ({ btnRef, count, ico, className, icoSize, disabled, style, onClick, children }) => {
    return (
        <button
            ref={btnRef}
            style={{ ...style }}
            disabled={disabled}
            className={`${className} flex items-center justify-center hover:text-gold min-w-[48px] h-[46px] text-black relative md:cursor-pointer cursor-default`}
            onClick={onClick}
        >
            {children}
            {ico === undefined ?
                null :
                <Ico className='w-5 h-5'>
                    {ico}
                </Ico>
            }
            {count === undefined ?
                null :
                <span className='rounded-full bg-gold p-1.5 pb-0.5 text-xs leading-3 text-black absolute right-0.5 bottom-0'>
                    {count}
                </span>
            }
        </button>
    );
}
export default Btn;