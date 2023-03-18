import { Link } from "react-router-dom";
import Ico from './ico';

const Input = ({ placeholder, icoSrc, className, onClick }) => {
    return (
        <label htmlFor='searchBox' className='w-60 block relative'>
            <Ico
                src={icoSrc}
                className='absolute top-3.5 left-0'
            />
            <input
                type="search"
                placeholder={placeholder}
                className='w-full h-full outline-none text-sm py-3 bg-transparent border-b border-b-gray-300'
                id="searchBox"
            />
        </label>
    );
}
export default Input;