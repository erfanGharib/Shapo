const ProductLabels = ({ price, oldPrice, inventory, textSize = 'text-sm' }) => {
    const calcPercent = () => {
        if (price >= oldPrice) console.error('newPrice cannot be lower than oldPrice or equal to');
        return Math.floor(100 - (price * 100 / oldPrice));
    }
    return (
        <div className={`${textSize} overlay py-3.5 px-3 flex justify-end`} style={{direction: 'ltr'}}>
            {oldPrice ?
                <span className='bg-orange-800 h-9 items-center flex text-white text-inherit leading-none circle'>
                    -{calcPercent()}%
                </span> :
                null
            }
            {inventory > 0 ?
                null :
                <span className='bg-black h-9 items-center flex text-white px-3 py-1 text-inherit'>ناموجود</span>
            }
        </div>
    );
}
export default ProductLabels;