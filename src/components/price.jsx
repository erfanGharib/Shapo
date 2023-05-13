const split = (num) => {
    return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
const Price = ({ oldPrice, price, className = '' }) => (
    <div className={`${className} flex sm:flex-row flex-col items-center`}>
        {oldPrice !== undefined && oldPrice !== null ?
            <>
                <s className='text-red-400'>
                    <span>{split(oldPrice)}</span>
                </s>
                <span className='text-gray-400 mx-2 sm:inline-block hidden'>-</span>
            </> :
            null
        }
        <div style={{direction: 'rtl'}}>
            <span className='text-inherit'>{split(price)}</span>
            <span className='text-sm mr-1'>تومان</span>
        </div>
    </div>
)
export default Price;