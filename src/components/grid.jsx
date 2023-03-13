const Grid = ({ products, title = 'product grid' }) => {
    return (
        <div className="w-full flex flex-col items-center">
            <h2>{title}</h2>
            <div className='mt-3 bg-black w-full flex items-center flex-wrap p-3 gap-3 max-w-7xl justify-center'>
                <div className='bg-white h-72 min-w-[200px]'></div>
                <div className='bg-white h-72 min-w-[200px]'></div>
                <div className='bg-white h-72 min-w-[200px]'></div>
                <div className='bg-white h-72 min-w-[200px]'></div>
                <div className='bg-white h-72 min-w-[200px]'></div>
                <div className='bg-white h-72 min-w-[200px]'></div>
                <div className='bg-white h-72 min-w-[200px]'></div>
            </div>
        </div>
    );
}
export default Grid;