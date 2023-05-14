import Price from './price';

const DoubleRangeSlider = ({ className, max, onInput, values }) => {
    let valueCpy = [...(!values ? [0, 3_000_000] : values)];
    const calcPrecent = (part, whole) => {
        return 100 * part / whole;
    }

    return (
        <>
            <div className='flex justify-between items-center w-full'>
                {valueCpy.map((v, index) => 
                    <Price price={v} key={index} />    
                )}
            </div>
            <div className={`w-full flex items-center relative mt-2 h-5`}>
                {
                    valueCpy.map((v, index) => 
                        <input 
                            min={0} 
                            max={max} 
                            value={v}
                            key={index}
                            type='range' 
                            onInput={({ target }) => { 
                                valueCpy[index] = Number(target.value);
                                onInput('priceRange', valueCpy);
                            }} 
                        />
                    )
                }
                <div 
                    className={`${valueCpy[0]} h-1 relative -z-10 bg-gold w-full`} 
                    style={{
                        marginLeft: 100 - calcPrecent(valueCpy[1], max) + '%',
                        marginRight: calcPrecent(valueCpy[0], max) + '%'
                    }}
                ></div>
                <div className='h-1 absolute -z-20 bg-gray-200 w-full'></div>
            </div>
        </>
    );
}
export default DoubleRangeSlider;