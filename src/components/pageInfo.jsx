const PageInfo = ({ title, path }) => {
    return (
        <div id='pageInfo' className='w-full h-40 bg-gray-50'>
            <div className='w-5/6 h-full m-auto items-center flex-col gap-2 justify-center sm:flex-row flex sm:justify-between text-gray-800'>
                <h1 className='font-bold text-3xl text-black'>{title}</h1>
                <div>
                    خانه / {path}
                </div>
            </div>
        </div>
    );
}
export default PageInfo;