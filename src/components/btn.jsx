import { Link } from "react-router-dom";
import Ico from './ico';

const Btn = ({ count, icoSrc, className, icoSize, disabled, style }) => {
    return (
        <button 
            style={{...style}}
            disabled={disabled} 
            className={`${className} px-3 py-1 rounded text-black relative`}
        >
            <Ico src={icoSrc} style={{width:icoSize, height:icoSize}}/>
            {count === undefined ? 
                null :
                <span className='rounded-full bg-gold p-1.5 pb-0.5 text-xs leading-3 text-black absolute right-0 -bottom-1'>
                    {count}
                </span>
            }
        </button>
    );
}
export default Btn;