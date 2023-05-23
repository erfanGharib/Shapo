import { ReactComponent as IcoClose } from '../../assets/icons/close.svg';
import { setFilters, setProductsCpy } from "../../store/reducers/_products";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Row from "./row";
import Btn from '../btn';
import Toggle from "../toggle";
import parseUrl from "../../utils/parseUrl";
import stringifyUrl from "../../utils/stringifyUrl";
import DoubleRangeSlider from "../doubleRangeSlider";

const Sidebar = () => {
    const { filters, products, categories } = useSelector(state => state.$_products);
    const maxNum = 3_000_000;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const applyFilter = (fname, value) => {
        dispatch(setFilters({ ...filters, [fname]: value }))
    }
    
    useEffect(() => {
        dispatch(setFilters({ 
            ...filters,
            ...parseUrl(location.search),
            priceRange: parseUrl(location.search)?.priceRange?.split(',')
        }));
    }, []);

    useEffect(() => {
        dispatch(setProductsCpy(
            products.filter(v =>
                (filters.cat        ? v.cat === filters.cat : v) &&
                (filters.offered    ? v.oldPrice !== null : v) &&
                (filters.exist      ? v.inventory > 0 : v) &&
                (filters.priceRange ?
                    (
                        filters.priceRange[0] <= v.price && 
                        filters.priceRange[1] >= v.price
                    ) : v
                )
            )
        ));
        
        navigate(stringifyUrl(filters));
    }, [filters]);

    return (
        <div id='sidebar' className='lg:w-1/3 w-full h-full mb-5 lg:border-none'>
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
                <DoubleRangeSlider values={filters.priceRange} onInput={applyFilter} max={maxNum} />
            </Row>

            <Row title='فقط محصولات موجود' className='!pb-3'>
                <Toggle 
                    checked={filters.exist} 
                    onChange={() => applyFilter('exist', !filters.exist)} 
                />
            </Row>

            <Row title='فقط محصولات های تخفیف دار' className='!pb-3 md:border-b-0'>
                <Toggle 
                    checked={filters.offered} 
                    onChange={() => applyFilter('offered', !filters.offered)} 
                />
            </Row>
        </div>
    );
}
export default Sidebar;