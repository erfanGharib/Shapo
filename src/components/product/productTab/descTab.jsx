import imgDefaultProduct from '../../../assets/images/products/default.svg'
import { ReactComponent as IcoTriangle } from '../../../assets/icons/triangle.svg';
import Ico from "../../ico";

const DescTab = ({ fullDesc }) => {
    return (
        <>
            <div className="py-5 w-full flex gap-5 items-center border-b md:flex-row flex-col">
                <img className='w-full md:w-1/3' src={imgDefaultProduct} alt="" />
                <div className='w-full md:w-2/3'>
                    <h5 className='font-bold text-xl mb-3'>{fullDesc[0].title}</h5>
                    <p className='leading-7'>{fullDesc[0].desc}</p>
                </div>
            </div>
            <div className="py-5 w-full flex gap-5 items-center md:flex-row flex-col">
                <img className='w-full md:w-1/3' src={imgDefaultProduct} alt="" />
                <div className='w-full md:w-2/3'>
                    <h5 className='font-bold text-xl mb-3'>{fullDesc[1].title}</h5>
                    <ul className='leading-7'>
                        {fullDesc[1].items.map(v =>
                            <li className='flex items-center md:'>
                                <Ico className='rotate-180 transform !w-4 !h-4 ml-2'>
                                    <IcoTriangle />
                                </Ico>
                                {v}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
}
export default DescTab; 