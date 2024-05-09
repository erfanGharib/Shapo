import { Link } from "react-router-dom";
import Ico from "../ico";
import SocialMedia from "../socialMedia";
import { useDispatch } from "react-redux";
import { setStatus } from '../../store/reducers/_sidebarStatus'
import ArrowLeft from "../../assets/icons/arrow-left";

const MainSidebar = () => {
    const dispatch = useDispatch();
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
        <>
            <div className='w-full flex flex-col'>
                {
                    links.map(({ link, text }, index) =>
                        <Link
                            onClick={() => dispatch(setStatus())}
                            to={link}
                            key={index}
                            className='!w-full !px-3 btn mb-2 !text-base hover:!text-current secondray-btn'
                        >
                            {text}
                            <Ico className='mr-auto !w-5 !h-5'>
                                <ArrowLeft />
                            </Ico>
                        </Link>
                    )
                }
            </div>

            <div className='flex flex-col px-3'>
                <span>اطلاعات</span>
                <p className='mt-4 text-gray-400'>
                    ایران سمنان گرمسار<br />
                    خیابان تختی<br />
                    erfangharib5@gmail.com<br />
                    ۰۹۳۳ ۰۰۰ ۳۶۰۶
                </p>
            </div>

            <SocialMedia className='px-3' />
        </>
    );
}
export default MainSidebar;