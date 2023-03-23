import icoPin from '../../assets/icons/pin.svg';
import icoMail from '../../assets/icons/mail.svg';
import icoPhone from '../../assets/icons/phone.svg';
import icoWatch from '../../assets/icons/watch.svg';
import Ico from '../ico';

const Informations = () => {
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
        <div id='Informations' className='w-full flex justify-start flex-wrap gap-y-8 gap-x-12'>
            {informations.map(({ title, ico, content }, index) => 
                <div key={index} className='flex gap-4'>
                    <Ico src={ico} style={{width:'33px', height: '33px'}}  />
                    <div className='flex-col gap-2 flex text-gray-800'>
                        <h4 className='text-lg text-black'>{title}</h4>
                        <div className='text-sm text-gray-400 leading-6'>
                            {content[0]}<br/>
                            {content[1]}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Informations;