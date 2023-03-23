import { useState } from "react";
import { Link } from "react-router-dom";
import Ico from "../ico";
import icoClose from '../../assets/icons/close.svg';
import SocialMedia from "../socialMedia";
import arrowRight from '../../assets/icons/arrow-left.svg'
import { useDispatch, useSelector } from "react-redux";
import { setStatus } from '../../store/reducers/_sidebarStatus'
import Btn from "../btn";

const Sidebar = () => {
    const dispatch = useDispatch();
    const { status } = useSelector(state => state.$_sidebarStatus);
    const links = [
        {
            link: '/',
            text: 'خانه'
        },
        {
            link: 'shop',
            text: 'محصولات'
        },
        {
            link: 'blog',
            text: 'وبلاگ'
        },
        {
            link: 'about-us',
            text: 'درباره ما'
        },
        {
            link: 'contact-us',
            text: 'ارتباط با ما'
        },
        // {
        //     link: '#',
        //     text: 'ورود'
        // },
        // {
        //     link: '#',
        //     text: 'ثبت نام'
        // },
    ]

    return (
        // <div className={`${status ? '' : 'invisible'} z-20 flex flex-col md:flex-row mt-3 md:mt-0 absoluteTopRight h-screen w-full`}>
        <>
            <div
                onClick={() => dispatch(setStatus())}
                className={`${status ? '!opacity-70' : 'opacity-0 invisible'} z-30 w-full h-screen transition-opacity duration-300 bg-black absoluteTopRight`}
            ></div>

            <div className={`${status ? 'translate-x-0' : 'translate-x-full'} z-40 px-10 py-6 md:w-96 w-full absoluteTopRight bg-white transform transition-transform duration-300 h-screen flex flex-col gap-y-10`}>
                <Btn icoSrc={icoClose} onClick={() => dispatch(setStatus())} className='w-max' />

                <div className='flex flex-col gap-y-2'>
                    {
                        links.map(({ link, text }, index) =>
                            <Link 
                                onClick={() => dispatch(setStatus())}
                                to={link} 
                                key={index} 
                                className='!w-full !px-3 btn secondray-btn'
                            >
                                {text}
                                <Ico src={arrowRight} className='w-5 h-5 mr-auto' />
                            </Link>
                        )
                    }
                </div>

                <div className='flex flex-col px-3'>
                    <span>اطلاعات</span>
                    <p className='mt-4 text-gray-400'>
                        ایران، استان سمنان، شهرستان شاهرود<br />
                        خیابان آزادگان، کوچه آزادگان دوم<br />
                        erfangharib5@gmail.com<br />
                        ۰۹۳۹ ۰۰۰ ۳۴۰۶
                    </p>
                </div>

                <SocialMedia className='px-3' />
            </div>
        </>
        // </div>
    );
}
export default Sidebar;