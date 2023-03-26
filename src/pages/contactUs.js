import Btn from "../components/btn";
import Informations from "../components/informations";
import Input from "../components/input";
import PageInfo from "../components/pageInfo";
import icoPin from '../assets/icons/pin.svg';
import icoMail from '../assets/icons/mail.svg';
import icoPhone from '../assets/icons/phone.svg';
import icoWatch from '../assets/icons/watch.svg';

const ContactUs = () => {
    const informations = [
        {
            title: 'زمان های کاری',
            ico: icoWatch,
            content: [
                'دوشنبه – جمعه : 8:30 – 18:00',
                'شنبه – یکشنبه : 9:00 – 17:00',
            ]
        },
        {
            title: 'تلفن همراه',
            ico: icoPhone,
            content: [
                '۰۹۳۹ ۰۰۰ ۳۴۰۶',
                '۰۹۳۹ ۰۰۰ ۳۴۰۶',
            ]
        },
        {
            title: 'ایمیل ما',
            ico: icoMail,
            content: [
                'erfangharib5@gmail.com',
                'erfan.gh.work@gmail.com',
            ]
        },
        {
            title: 'موقعیت ما',
            ico: icoPin,
            content: [
                'ایران، استان سمنان، شهرستان شاهرود',
                'خیابان آزادگان، کوچه آزادگان دوم',
            ]
        },
    ]
    return (
        <div className='flex flex-col'>
            <PageInfo title='ارتباط با ما' path='ارتباط با ما' />
            <div className='w-full mx-auto flex flex-col items-center my-14'>
                <Informations items={informations} />
                <hr className='my-14 w-5/6' />

                <div className='flex w-full md:w-2/3 flex-col h-96'>
                    <h3 className='text-xl font-bold'>با ما در ارتباط باشید</h3>
                    <form className='flex flex-col my-5 w-full gap-3'>
                        <div className='w-full flex gap-3'>
                            <Input placeholder='نام' className='w-full md:w-1/2' />
                            <Input placeholder='ایمیل' className='w-full md:w-1/2' />
                        </div>
                        <Input placeholder='موضوع' className='w-full md:w-full' />
                        <textarea
                            className='w-full'
                            placeholder='متن پیام'
                            rows="5"
                        ></textarea>

                        <Btn className='btn primary-btn'>ارسال</Btn>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default ContactUs;