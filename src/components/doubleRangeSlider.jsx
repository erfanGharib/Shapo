import { useState } from 'react';
import Price from './price';

const DoubleRangeSlider = ({ className, max }) => {
    const [values, setValues] = useState([0, max]);
    let valueCpy = [...values];
    const calcPrecent = (part, whole) => {
        return 100 * part / whole;
    }

    return (
        <>
            <div className='flex justify-between items-center w-full'>
                {values.map(v => 
                    <Price price={v} />    
                )}
            </div>
            <div className={`w-full flex items-center relative mt-2 h-5`}>
                {
                    values.map((_, index) => 
                        <input 
                            min={0} 
                            max={max} 
                            defaultValue={index === 0 ? 0 : max}
                            type='range' 
                            onInput={({ target }) => { valueCpy[index] = target.value; setValues(valueCpy) }} 
                        />
                    )
                }
                <div 
                    className={`${values[0]} h-1 relative -z-10 bg-gold w-full`} 
                    style={{
                        marginLeft: 100 - calcPrecent(values[1], max) + '%',
                        marginRight: calcPrecent(values[0], max) + '%'
                    }}
                ></div>
                <div className='h-1 absolute -z-20 bg-gray-200 w-full'></div>
            </div>
        </>
    );
}
export default DoubleRangeSlider;