import Row from "./row";
import Input from '../input'
import Btn from '../btn'
import { ReactComponent as IcoClose } from '../../assets/icons/close.svg';
import Toggle from "../toggle";
import { useDispatch, useSelector } from "react-redux";
import { setFilters, setProductsCpy } from "../../store/reducers/_products";
import { useEffect, useRef } from "react";
import stringifyUrl from "../../utils/stringifyUrl";
import { useLocation, useNavigate } from "react-router-dom";
import parseUrl from "../../utils/parseUrl";
import {ReactComponent as IcoSearch} from '../../assets/icons/search.svg';
import DoubleRangeSlider from "../doubleRangeSlider";

const Sidebar = () => {
    const { filters, products, categories } = useSelector(state => state.$_products);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const applyFilter = (fname, value) => {
        dispatch(setFilters({ ...filters, [fname]: value }))
    }
    
    useEffect(() => {
        dispatch(setFilters({ 
            ...parseUrl(location.search),
            ...filters
        }));
    }, []);

    useEffect(() => {
        dispatch(setProductsCpy(
            products.filter(v =>
                (filters.cat        ? v.cat === filters.cat : v) &&
                (filters.offered    ? v.oldPrice !== null : v) &&
                (filters.exist      ? v.inventory > 0 : v) //&&
                // (filters.priceRange.enabled ?
                //     (
                //         filters.priceRange.values[0] <= v.price && 
                //         filters.priceRange.values[1] >= v.price
                //     ) : v
                // )
            )
        ));

        navigate(stringifyUrl(filters));
    }, [filters]);

    return (
        <div id='sidebar' className='lg:w-1/3 w-full h-full mb-5 pb-5 lg:border-none border-b'>
            <Row title='دسته بندی'>
                <ul className='list-disc space-y-2 mr-5 w-full text-gray-400'>
                    {categories.map((v, index) =>
                        <li
                            className={`${v === filters.cat ? 'text-gold' : ''} cursor-pointer`}
                            onClick={() => applyFilter('cat', v)}
                            key={index}
                        >
                            {v}
                        </li>
                    )}
                </ul>

                {filters.cat ? 
                    <Btn 
                        className='!px-0 text-red-600 text-sm !h-7 mt-2' 
                        onClick={() => applyFilter('cat', false)}
                    >
                        <IcoClose width='18px' className='ml-1' />
                        حذف فیلتر
                    </Btn> : null                
                }
            </Row>

            <Row title='محدوده قیمت' className='flex-col'>
                <DoubleRangeSlider max={5_000_000} />
            </Row>

            <Row title='فقط محصولات موجود' className='!pb-4'>
                <Toggle 
                    checked={filters.exist} 
                    onClick={() => applyFilter('exist', !filters.exist)} 
                />
            </Row>

            <Row title='فقط محصولات های تخفیف دار' className='border-none'>
                <Toggle 
                    checked={filters.offered} 
                    onClick={() => applyFilter('offered', !filters.offered)} 
                />
            </Row>
        </div>
    );
}
export default Sidebar;