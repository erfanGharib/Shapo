import { useState } from "react";
import Btn from "../../btn";
import imgDefaultProduct from '../../../assets/images/products/default.svg'
import { ReactComponent as IcoTriangle } from '../../../assets/icons/triangle.svg';
import Ico from "../../ico";

const DescTab = ({ desc, /*features*/ }) => {
    const features = [
        'آستین بالشتک داخلی مناسب لپ تاپ 15 اینچی است',
        'پنل پشتی کاملاً پددار شده، دسته ی تحت وب',
        'آستین تبلت با روکش تریکو داخلی',
        'دارای یک محفظه اصلی بزرگ و زیپدار',
        'پارچه بوم نخی درجه یک'
    ];
    return (
        <>
            <div className="py-5 w-full flex gap-5 items-center border-b md:flex-row flex-col">
                <img className='w-full md:w-1/3' src={imgDefaultProduct} alt="" />
                <div className='w-full md:w-2/3'>
                    <h5 className='font-bold text-xl mb-3'>توضیحات</h5>
                    <p className='leading-7'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم </p>
                </div>
            </div>
            <div className="py-5 w-full flex gap-5 items-center md:flex-row flex-col">
                <img className='w-full md:w-1/3' src={imgDefaultProduct} alt="" />
                <div className='w-full md:w-2/3'>
                    <h5 className='font-bold text-xl mb-3'>ویژگی ها</h5>
                    <ul className='leading-7'>
                        {features.map(v =>
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