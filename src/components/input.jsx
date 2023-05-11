import Ico from './ico';

const Input = ({ id, type = "search", onInput, placeholder, ico, className, onClick, disabled, inputRef }) => {
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
            />
        </label>
    );
}
export default Input;