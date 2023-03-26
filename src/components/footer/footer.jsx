import { Link } from "react-router-dom";
import Input from "../input";
import Logo from "../logo";
import SocialMedia from "../socialMedia";
import icoArrowLeft from '../../assets/icons/arrow-left.svg';

const Footer = () => {
    const lists = [
        {
            title: 'راهنمای خرید از شاپو',
            items: [
                {
                    link: '#',
                    text: 'نحوه ثبت سفارش',
                },
                {
                    link: '#',
                    text: 'رویه ارسال سفارش',
                },
                {
                    link: '#',
                    text: 'شیوه های پرداخت',
                },
            ]
        },
        {
            title: 'خدمات مشتریان',
            items: [
                {
                    link: '#',
                    text: 'پاسخ به پرسش های متداول',
                },
                {
                    link: '#',
                    text: 'رویه مرجوع کردن کالا',
                },
                {
                    link: '#',
                    text: 'شرایط استفاده',
                },
                {
                    link: '#',
                    text: 'حریم خصوصی',
                },
            ]
        },
        {
            title: 'درباره ما',
            items: [
                {
                    link: '#',
                    text: 'درباره ما',
                },
                {
                    link: '#',
                    text: 'ما چه کاری انجام میدهیم',
                },
                {
                    link: '#',
                    text: 'ارتباط با ما',
                },
            ]
        },
    ]
    return (
        <footer aria-label="Site Footer" className="w-full border-gray-100 border-t">
            <div className="max-w-1366 w-5/6 pt-16 pb-10 mx-auto">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {
                        lists.map(({ title, items }) => {
                            return (
                                <div key={title}>
                                    <p className="font-medium text-black">{title}</p>
                                    <ul className="space-y-4 text-sm mt-6">
                                        {items.map(({ link, text }, index) =>
                                            <li key={index}>
                                                <Link
                                                    href={link}
                                                    className="text-gray-400 transition hover:opacity-75"
                                                >
                                                    {text}
                                                </Link>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            )
                        })
                    }

                    <div>
                        <p className="font-medium text-gray-900 mb-2">از تخفیف ها با خبر باشید</p>
                        <Input placeholder='ایمیل شما' icoSrc={icoArrowLeft} />
                    </div>
                </div>

                <div className="mt-14 flex text-sm flex-col md:flex-row sm:items-center gap-y-4 justify-center sm:justify-between">
                    <SocialMedia className='md:w-1/3 md:justify-start justify-center' />
                    <Logo />
                    <div className='flex md:justify-end gap-x-11 md:w-1/3 justify-center'>
                        <Link to='#'>شرایط و مقررات</Link>
                        <Link to='#'>سیاست ها</Link>
                        <Link to='#'>نقشه</Link>
                    </div>
                </div>

                <p className="text-xs text-gray-400 mx-auto w-max mt-7">
                    &copy; 1401 - 1402 کلیه حقوق این سایت متعلق به شاپو است.
                </p>
            </div>
        </footer>

    );
}
export default Footer;