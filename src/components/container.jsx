import angleRight from '../assets/icons/angle-left.svg'
import Ico from './ico';
import TomanSign from './tomanSign';

const Container = ({
    title,
    supTitle,
    desc,
    rtl = true,
    primary = false,
    buttonText = 'خرید کنید',
    imgSrc = undefined,
    tomanSign = true,
}) => {
    return (
        <div className={`max-w-1366 h-96 flex justify-center gap-x-20 mx-auto w-5/6 ${rtl ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            <div className='w-1/2 flex justify-start items-center'>
                {imgSrc !== undefined ? 
                    <img src={imgSrc} alt={supTitle} /> :
                    null
                }
            </div>
            <div className='w-1/2 flex flex-col justify-center'>
                <h4 className={`w-20 mb-1 ${primary ? 'text-gold' : 'text-gray-400'}`}>{supTitle}</h4>
                <h2 className={`${primary ? 'text-[55px]' : 'text-3xl'} leading-tight`}>{title}</h2>

                <p className='mb-7 mt-5'>{desc}</p>
                <button className={`btn ${primary ? 'primary-btn' : 'general-btn'}`}>
                    {buttonText}
                    {tomanSign ? <TomanSign /> : null}
                    <Ico src={angleRight} className={`mr-1 filter  ${primary ? 'invert' : ''}`} />
                </button>
            </div>
        </div>
    );
}
export default Container;