const PageInfo = ({ title, path }) => {
    return (
        <>
            <div id='pageInfo' className='w-full h-40 bg-gray-50'>
                <div className='w-5/6 h-full m-auto items-center flex-col gap-2 justify-center sm:flex-row flex sm:justify-between text-gray-800'>
                    <h1 className='font-bold text-3xl'>{title}</h1>
                    <div>{path} خانه / </div>
                </div>
            </div>
        </>
    );
}
export default PageInfo;