import Btn from "../components/btn";
import Input from "../components/input";
import PageInfo from "../components/pageInfo";
import Informations from "../components/informations";
import {ReactComponent as IcoPin} from '../assets/icons/pin.svg';
import {ReactComponent as IcoMail} from '../assets/icons/mail.svg';
import {ReactComponent as IcoPhone} from '../assets/icons/phone.svg';
import {ReactComponent as IcoWatch} from '../assets/icons/watch.svg';

const ContactUs = () => {
    const informations = [
        {
            title: 'زمان های کاری',
            ico: <IcoWatch/>,
            content: [
                'دوشنبه – جمعه : 8:30 – 18:00',
                'شنبه – یکشنبه : 9:00 – 17:00',
            ]
        },
        {
            title: 'تلفن همراه',
            ico: <IcoPhone/>,
            content: [
                '۰۹۳۹ ۰۰۰ ۳۴۰۶',
                '۰۹۳۹ ۰۰۰ ۳۴۰۶',
            ]
        },
        {
            title: 'ایمیل ما',
            ico: <IcoMail/>,
            content: [
                'erfangharib5@gmail.com',
                'erfan.gh.work@gmail.com',
            ]
        },
        {
            title: 'موقعیت ما',
            ico: <IcoPin/>,
            content: [
                'ایران، استان سمنان، شهرستان شاهرود',
                'خیابان آزادگان، کوچه آزادگان دوم',
            ]
        },
    ]
    return (
        <div className='flex flex-col'>
            <PageInfo title='ارتباط با ما' path='ارتباط با ما' />
            <div className='mainPart'>
                <Informations items={informations} />
                <hr className='my-7 w-full' />
                <div className='flex w-full md:w-2/3 flex-col'>
                    <h3 className='text-xl font-bold'>با ما در ارتباط باشید</h3>
                    <form className='flex flex-col my-5 w-full space-3'>
                        <div className='w-full flex space-3'>
                            <Input placeholder='نام' className='w-full md:w-1/2' />
                            <Input placeholder='ایمیل' className='w-full md:w-1/2' />
                        </div>
                        <Input placeholder='موضوع' className='w-full md:w-full' />
                        <textarea
                            className='w-full'
                            placeholder='متن پیام'
                            rows="5"
                        ></textarea>

                        <Btn className='btn primary-btn w-max'>ارسال</Btn>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default ContactUs;