import { useState } from "react";
import { Link } from "react-router-dom";
import Ico from "../ico";
import icoBar from '../../assets/icons/bar.svg';
import SocialMedia from "../socialMedia";
import arrowRight from '../../assets/icons/arrow-left.svg'
import { useDispatch, useSelector } from "react-redux";
import { setStatus } from '../../store/reducers/_sidebarStatus'

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
        <div className="flex flex-col md:flex-row mt-3 md:mt-0">
            <button 
                onClick={() => dispatch(setStatus())} 
                className={`${status ? 'translate-x-12' : ''} duration-300 transition-transform transform ml-2 py-1 rounded text-black z-30`}
            >
                <Ico src={icoBar} />
            </button>

            <div
                onClick={() => dispatch(setStatus())}
                className={`${status ? '!opacity-70' : 'opacity-0 invisible'} transition-opacity duration-300 w-full h-screen bg-black z-10 absoluteTopRight`}
            ></div>

            <div className={`${status ? 'translate-x-0' : 'translate-x-full'} absoluteTopRight h-screen flex flex-col pt-20 gap-y-12 p-12 sm:w-96 w-full z-20 bg-white transform transition-transform duration-300 `}>
                <div className='flex flex-col gap-y-2'>
                    {
                        links.map(({ link, text }, index) =>
                            <Link to={link} key={index} className='!w-full !px-3 btn secondray-btn'>
                                {text}
                                <Ico src={arrowRight} className='w-5 h-5 mr-auto' />
                            </Link>
                        )
                    }
                </div>

                <div className='flex flex-col px-3'>
                    <span>اطلاعات</span>
                    <p className='mt-4 opacity-50'>
                        ایران، استان سمنان، شهرستان شاهرود<br />
                        خیابان آزادگان، کوچه آزادگان دوم<br />
                        erfangharib5@gmail.com<br />
                        (+98) 939 *** 3406
                    </p>
                </div>

                <SocialMedia />
            </div>
        </div>
    );
}
export default Sidebar;