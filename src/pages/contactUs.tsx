import Btn from "../components/btn";
import Input from "../components/input";
import PageInfo from "../components/pageInfo";
import Informations from "../components/informations";
import Watch from "../assets/icons/watch";
import Phone from "../assets/icons/phone";
import Mail from "../assets/icons/mail";
import Pin from "../assets/icons/pin";

const ContactUs = () => {
    const informations = [
        {
            title: 'زمان های کاری',
            ico: <Watch />,
            content: [
                'دوشنبه – جمعه : 8:30 – 18:00',
                'شنبه – یکشنبه : 9:00 – 17:00',
            ]
        },
        {
            title: 'تلفن همراه',
            ico: <Phone />,
            content: [
                '۰۹۳۹ ۰۰۰ ۳۴۰۶',
                '۰۹۳۹ ۰۰۰ ۳۴۰۶',
            ]
        },
        {
            title: 'ایمیل ما',
            ico: <Mail />,
            content: [
                'erfangharib5@gmail.com',
                'erfan.gh.work@gmail.com',
            ]
        },
        {
            title: 'موقعیت ما',
            ico: <Pin />,
            content: [
                'ایران، استان سمنان، شهرستان شاهرود',
                'خیابان آزادگان، کوچه آزادگان دوم',
            ]
        },
    ];

    return (
        <div className='flex flex-col'>
            <PageInfo title='ارتباط با ما' path='ارتباط با ما' />
            <div className='mainPart'>
                <Informations items={informations} />
                <hr className='my-7 w-full' />
                <div className='w-full md:flex-row flex-col flex justify-between'>
                    <div className='flex w-full md:w-1/2 flex-col md:ml-5'>
                        <h3 className='text-xl font-bold'>با ما در ارتباط باشید</h3>
                        <form className='flex flex-col my-5 w-full'>
                            <div className='w-full flex mb-3'>
                                <Input placeholder='نام' className='w-full ml-3 md:w-1/2' />
                                <Input placeholder='ایمیل' className='w-full md:w-1/2' />
                            </div>
                            <Input placeholder='موضوع' className='w-full md:w-full mb-3' />
                            <textarea
                                className='w-full mb-3'
                                placeholder='متن پیام'
                                rows={5}
                            ></textarea>

                            <Btn className='btn primary-btn w-max'>ارسال</Btn>
                        </form>
                    </div>
                    {/* <GoogleMap /> */}
                </div>
            </div>
        </div>
    );
}
export default ContactUs;