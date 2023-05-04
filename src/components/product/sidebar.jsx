import Col from "../col";
import Input from '../input'
import Btn from '../btn'
import {ReactComponent as IcoLeftRightArrow} from '../../assets/icons/left-right-arrow.svg';
import Toggle from "../toggle";
import { useDispatch, useSelector } from "react-redux";
import { setFilters, setProductsCpy } from "../../store/reducers/_products";
import { useState } from "react";

const Sidebar = () => {
    const { products, productsCpy } = useSelector(state => state.$_products);
    const filtersCpy = [];

    // const existingProducts = productsCpy.filter(v => v.inventory >= 1);
    // const offeredProducts = productsCpy.filter(v => v.oldPrice !== null);
    const dispatch = useDispatch();

    // const applyFilter = (type) => {
    //     filtersCpy.push(type);

    //     setFilters(filtersCpy)
    //     // filters.forEach(filter => {
    //     //     filtersCpy.push(filter);
    //     // })
    //     if(x) dispatch(setProductsCpy(filtered));
    //     else dispatch(setProductsCpy(products));
    //     x = !x;
    // }

    return (
        <div id='sidebar' className='lg:w-1/3 w-full h-full space-y-7'>
            <Col><Input placeholder='جستجو در نتایج' /></Col>

            <Col title='دسته بندی'>
                <ul className='list-disc space-y-2 mr-5 w-full text-gray-400'>
                    <li>اکسسوری</li>
                    <li>دکوراسیون</li>
                    <li>مبلمان</li>
                </ul>
            </Col>

            <Col title='محدوده قیمت' className='flex-col'>
                <div className='flex'>
                    <Input placeholder='از 0 تومان' />
                    <Btn ico={<IcoLeftRightArrow/>} />
                    <Input placeholder='تا 0 تومان' />
                </div>
            </Col>

            <Col title='فقط محصولات موجود'>
                <Toggle onClick={() => dispatch(setFilters('inventory'))} />
            </Col>

            <Col title='فقط محصولات های تخفیف دار'>
                <Toggle onClick={() => dispatch(setFilters('oldPrice'))} />
            </Col>
        </div>
    );
}
export default Sidebar;