import Col from "../col";
import Input from '../input'
import Btn from '../btn'
import {ReactComponent as IcoLeftRightArrow} from '../../assets/icons/left-right-arrow.svg';
import Toggle from "../toggle";

const Sidebar = () => {
    return (
        <div id='sidebar' className='md:w-1/3 w-full h-full space-y-7'>
            <Col><Input placeholder='جستجو در نتایج' /></Col>

            <Col title='دسته بندی'>
                <ul className='list-disc space-y-2 mr-5 w-full text-gray-400'>
                    <li>اکسسوری</li>
                    <li>دکوراسیون</li>
                    <li>مبلمان</li>
                </ul>
            </Col>

            <Col title='محدوده قیمت'>
                <div className='flex'>
                    <Input placeholder='از 0 تومان' />
                    <Btn ico={<IcoLeftRightArrow/>} />
                    <Input placeholder='تا 0 تومان' />
                </div>
            </Col>

            <Col title='فقط محصولات موجود'>
                <Toggle />
            </Col>

            <Col title='فقط آیتم های تخفیف دار'>
                <Toggle />
            </Col>
        </div>
    );
}
export default Sidebar;