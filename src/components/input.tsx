import { FormEvent, Ref } from 'react';
import Ico from './ico';

type T_Props = { 
    id?: string;
    type?: string;
    onInput?: (event: FormEvent<HTMLInputElement>) => void;
    placeholder?: string;
    ico?: any;
    className?: string;
    value?: string;
    disabled?: boolean;
    inputRef?: Ref<HTMLInputElement>;
}

const Input = ({ id, type = "search", onInput, placeholder, ico, className, value, disabled, inputRef }: T_Props) => {
    return (
        <label htmlFor='searchBox' className={`${className} w-full block relative`}>
            <Ico className='absolute top-2.5 left-3 md:block hidden'>
                {ico}
            </Ico>
            <input
                disabled={disabled}
                ref={inputRef}
                type={type}
                onInput={onInput}
                placeholder={placeholder}
                className='w-full h-full'
                id={id}
                defaultValue={value}
            />
        </label>
    );
}
export default Input;