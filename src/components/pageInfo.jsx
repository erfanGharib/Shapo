import { Link } from "react-router-dom";

const PageInfo = ({ title, path }) => {
    return (
        <div id='pageInfo' className='w-full h-40 bg-gray-50 mb-14'>
            <div className='w-5/6 h-full m-auto items-center flex-col justify-center sm:flex-row flex sm:justify-between text-gray-800'>
                <h1 className='font-bold text-3xl text-black md:mb-0 mb-4'>{title}</h1>
                <div>
                    <Link to='/'>خانه</Link>
                    <span className='mx-4'>/</span>
                    <span className='text-gray-400'>{path}</span>
                </div>
            </div>
        </div>
    );
}
export default PageInfo;