import { T_ProductsPage, setFilters, setProductsCpy } from "../../store/reducers/_productsPage";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Row from "./row";
import Btn from '../btn';
import Toggle from "../toggle";
import parseUrl from "../../utils/parseUrl";
import stringifyUrl from "../../utils/stringifyUrl";
import DoubleRangeSlider from "../doubleRangeSlider";
import { T_AppStoreReducers } from '../../store';
import Close from "../../assets/icons/close";

const Sidebar = () => {
    const { filters, products, categories } = useSelector<T_AppStoreReducers, T_ProductsPage>(state => state.$_productsPage);
    const maxNum = 3_000_000;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const applyFilter = <K extends keyof T_ProductsPage['filters']>(
        filterName: K,
        value: T_ProductsPage['filters'][K]
    ) => {
        dispatch(setFilters({ ...filters, [filterName]: value }))
    };

    useEffect(() => {
        const parsedUrl = parseUrl(location.search)
        const priceRange = parsedUrl
            ?.priceRange
            ?.split(',')
            ?.map(Number)

        dispatch(setFilters({
            ...filters,
            ...parsedUrl,
            priceRange: priceRange 
                ? [priceRange[0], priceRange[1]] 
                : null
        }));
    }, []);

    useEffect(() => {
        dispatch(setProductsCpy(
            products.filter(v =>
                (filters.cat ? v.cat === filters.cat : v) &&
                (filters.offered ? v.oldPrice !== null : v) &&
                (filters.exist ? v.inventory > 0 : v) &&
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
                        onClick={() => applyFilter('cat', null)}
                    >
                        <Close width={18} className='ml-1' />
                        حذف فیلتر
                    </Btn> : null
                }
            </Row>

            <Row title='محدوده قیمت' className='flex-col'>
                <DoubleRangeSlider
                    values={filters.priceRange}
                    onInput={(event, inputValue) => applyFilter('priceRange', inputValue)}
                    max={maxNum}
                />
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