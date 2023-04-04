const split = (num) => {
    return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
const Price = ({ oldPrice, price, className }) => (
    <div className={`${className} gap-x-[1px] flex items-center`}>
        {oldPrice !== undefined && oldPrice !== null ?
            <s>
                <span className='text-inherit'>{split(oldPrice)}</span> –
            </s> :
            null
        }
        <span className='text-inherit'>{split(price)}</span>
        <span className='text-sm mr-1'>تومان</span>
    </div>
)
export default Price;