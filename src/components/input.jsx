import { Link } from "react-router-dom";
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
                className='w-full h-full outline-none px-5 text-sm py-3 bg-gray-200 bg-opacity-40 border-b border-gray-200'
                id="searchBox"
            />
        </label>
    );
}
export default Input;