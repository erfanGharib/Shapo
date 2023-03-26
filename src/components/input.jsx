import Ico from './ico';

const Input = ({ placeholder, ico, className, onClick }) => {
    return (
        <label htmlFor='searchBox' className={`${className} w-full block relative`}>
            <Ico className='absolute top-2.5 left-3 md:block hidden'>
                {ico}
            </Ico>
            <input
                type="search"
                placeholder={placeholder}
                className='w-full h-full'
                id="searchBox"
            />
        </label>
    );
}
export default Input;