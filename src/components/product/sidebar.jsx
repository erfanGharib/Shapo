import Row from "./row";
import Input from '../input'
import Btn from '../btn'
import { ReactComponent as IcoLeftRightArrow } from '../../assets/icons/left-right-arrow.svg';
import Toggle from "../toggle";
import { useDispatch, useSelector } from "react-redux";
import { setFilters, setProductsCpy } from "../../store/reducers/_products";
import { useEffect } from "react";

const Sidebar = () => {
    const { filters, products, categories } = useSelector(state => state.$_products);
    const dispatch = useDispatch();

    const applyFilter = (fname, value) => {
        dispatch(setFilters({ ...filters, [fname]: value }))
    }

    useEffect(() => {
        dispatch(setProductsCpy(
            products.filter(v =>
                (filters.exist      ? v.inventory > 0 : v) &&
                (filters.cat        ? v.cat === filters.cat : v) &&
                (filters.name       ? v.name.includes(filters.name) : v) &&
                (filters.offered    ? v.oldPrice !== null : v) &&
                (filters.priceRange.applyF ?
                    (
                        filters.priceRange.values[0] <= v.price && 
                        filters.priceRange.values[1] >= v.price
                    )
                    : v
                )
            )
        ));
    }, [filters]);

    return (
        <div id='sidebar' className='lg:w-1/3 w-full h-full space-y-7'>
            <Row>
                <Input
                    onInput={({ target }) => applyFilter('name', target.value)}
                    placeholder='جستجو در نتایج'
                    type="search"
                />
            </Row>

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
            </Row>

            <Row title='محدوده قیمت' className='flex-col'>
                <div className='flex'>
                    <Input 
                        type='tel' 
                        placeholder='از 0 تومان' 
                        onInput={({ target }) => applyFilter('priceRange', target.value)} 
                    />
                    <Btn ico={<IcoLeftRightArrow />} />
                    <Input type='tel' placeholder='تا 0 تومان' />
                    <Btn className='general-btn btn !px-6 mr-3'>اعمال</Btn>
                </div>
            </Row>

            <Row title='فقط محصولات موجود'>
                <Toggle onClick={() => applyFilter('exist', !filters.exist)} />
            </Row>

            <Row title='فقط محصولات های تخفیف دار'>
                <Toggle onClick={() => applyFilter('offered', !filters.offered)} />
            </Row>
        </div>
    );
}
export default Sidebar;