import Ico from './ico';
import { CSSProperties, FormEvent, ReactElement, Ref } from "react";

type T_Props = { 
    btnRef?: Ref<any>
    count?: number
    ico?: HTMLElement | Element | ReactElement<any, any>;
    className?: string
    disabled?: boolean;
    style?: CSSProperties;
    onClick?: (event: FormEvent<HTMLButtonElement>) => void;
    children?: any
}

const Btn = ({ btnRef, count, ico, className, disabled, style, onClick, children }: T_Props) => {
    return (
        <button
            ref={btnRef}
            style={{ ...style }}
            disabled={disabled}
            className={`${className} outline-none transition-colors duration-200 flex items-center justify-center min-w-[48px] h-[46px] relative md:cursor-pointer cursor-default`}
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