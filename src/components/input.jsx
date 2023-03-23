import Ico from './ico';

const Input = ({ placeholder, icoSrc, className, onClick }) => {
    return (
        <label htmlFor='searchBox' className={`${className} w-full block relative`}>
            <Ico
                src={icoSrc}
                className='absolute top-2.5 left-3 md:block hidden'
            />
            <input
                type="search"
                placeholder={placeholder}
                className='w-full h-full '
                id="searchBox"
            />
        </label>
    );
}
export default Input;