import { FormEvent } from 'react';
import Price from './price';

type T_Props = { 
    max: number,
    onInput: (event: FormEvent<HTMLInputElement>, inputValue: [number, number]) => void;
    values: [number, number]
}

const DoubleRangeSlider = ({ max, onInput, values }: T_Props) => {
    let valueCpy = [...(!values ? [0, 3_000_000] : values)];
    
    const calcPercent = (part: number, whole: number) => {
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
                            onInput={(event) => { 
                                valueCpy[index] = Number(event.target?.['value']);
                                onInput(event, valueCpy as [number, number]);
                            }} 
                        />
                    )
                }
                <div 
                    className={`${valueCpy[0]} h-1 relative -z-10 bg-gold w-full`} 
                    style={{
                        marginLeft: 100 - calcPercent(valueCpy[1], max) + '%',
                        marginRight: calcPercent(valueCpy[0], max) + '%'
                    }}
                ></div>
                <div className='h-1 absolute -z-20 bg-gray-200 w-full'></div>
            </div>
        </>
    );
}
export default DoubleRangeSlider;