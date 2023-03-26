import { Link } from "react-router-dom";
import Ico from './ico';

const Btn = ({ btnRef, count, ico, className, icoSize, disabled, style, onClick, children }) => {
    return (
        <button
            ref={btnRef}
            style={{ ...style }}
            disabled={disabled}
            className={`${className} hover:text-gold min-w-[48px] px-3 h-12 text-black relative md:cursor-pointer cursor-default`}
            onClick={onClick}
        >
            {ico === undefined ?
                null :
                <Ico className='mx-auto'>
                    {ico}
                </Ico>
            }
            {count === undefined ?
                null :
                <span className='rounded-full bg-gold p-1.5 pb-0.5 text-xs leading-3 text-black absolute right-0.5 bottom-0'>
                    {count}
                </span>
            }
            {children}
        </button>
    );
}
export default Btn;