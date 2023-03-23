import Col from "../col";
import Input from '../input'

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
        </div>
    );
}
export default Sidebar;