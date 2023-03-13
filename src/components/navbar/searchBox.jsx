import Ico from "../ico";
import icoSearch from '../../assets/icons/search.svg';

const SearchBox = () => {
    return (
        <div className='w-1/3 sm:block hidden'>
            <label htmlFor='searchBox' className='w-60 mr-auto block relative'>
                <Ico
                    src={icoSearch}
                    className='absolute top-3.5 left-0' 
                />
                <input 
                    type="search"
                    placeholder="جست و جو..."
                    className='w-full h-full outline-none py-3 bg-transparent border-b border-b-gray-300' 
                    id="searchBox"
                />
            </label>
        </div>
    );
}
export default SearchBox;