import { useEffect } from "react";
import Input from "../input";
import { ReactComponent as IcoSearch } from '../../assets/icons/search.svg';
import MiniProductBox from "../product/miniProductBox";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setSearchBoxStatus, setSearchBoxValue } from "../../store/reducers/_searchBox";
import { IS_WIDTH_768px } from "../..";

const SearchBox = () => {
    const { products } = useSelector(state => state.$_products);
    const { status, value } = useSelector(state => state.$_searchBox);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(setSearchBoxValue(''));
    }, [location]);

    return (
        <div className={`${status ? '' : '!opacity-0 !invisible !-top-5'} opacity-100 visible top-0 relative transition-all z-20 w-full md:mt-0 mt-3 md:w-1/3 justify-center md:justify-end`}>
            <div className='w-full md:max-w-[280px] mr-auto max-w-none relative'>
                <Input 
                    placeholder='جست و جو ...' 
                    ico={<IcoSearch />} 
                    className='w-full'
                    onInput={({ target }) => dispatch(setSearchBoxValue(target.value))}
                />
                <div className='absolute left-0 w-full bg-white shadow-xl max-h-96 overflow-y-auto rtl' id="searchBoxResults">
                    {
                        value !== '' &&
                        products
                        ?.filter(data => data.name.includes(value))
                        ?.map((product, index) => 
                            <MiniProductBox  
                                key={index}
                                className="hover:bg-gray-50 !mb-0 p-3 cursor-pointer transition-colors"
                                closeBtn={false}
                                onClick={() => {
                                    navigate(`../product/${product.name}`);
                                    dispatch(setSearchBoxStatus(!IS_WIDTH_768px));
                                }}
                                {...product}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
}
export default SearchBox;