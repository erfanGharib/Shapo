import imgDefaultProduct from '../../../assets/images/products/default.svg'
import { ReactComponent as IcoTriangle } from '../../../assets/icons/triangle.svg';
import Ico from "../../ico";

const DescTab = ({ fullDesc, productImg = imgDefaultProduct }) => {
    return (
        <>
            <div className="py-5 w-full flex space-5 items-center border-b md:flex-row flex-col">
                <img className='w-full md:w-1/3 md:ml-5' src={productImg} alt="" />
                <div className='w-full md:w-2/3'>
                    <h5 className='font-bold text-xl my-3'>{fullDesc[0].title}</h5>
                    <p className='leading-7'>{fullDesc[0].desc}</p>
                </div>
            </div>
            <div className="py-5 w-full flex items-center md:flex-row flex-col">
                <img className='w-full md:w-1/3 md:ml-5' src={productImg} alt="" />
                <div className='w-full md:w-2/3'>
                    <h5 className='font-bold text-xl my-3'>{fullDesc[1].title}</h5>
                    <ul className='leading-7'>
                        {fullDesc[1].items.map((v, index) =>
                            <li key={index} className='flex items-center md:'>
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