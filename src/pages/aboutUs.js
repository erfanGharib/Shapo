import Informations from "../components/informations";
import PageInfo from "../components/pageInfo";
import img1 from '../assets/images/aboutUs/1-780x770.jpg';
import img2 from '../assets/images/aboutUs/2-380x380.jpg';
import img3 from '../assets/images/aboutUs/3-380x380.jpg';
import img4 from '../assets/images/aboutUs/4-380x380.jpg';
import img5 from '../assets/images/aboutUs/5-780x380.jpg';
import icoPlay from '../assets/icons/play.svg';
import imgVideoBanner from '../assets/images/aboutUs/video-banner.jpg';
import GridItem from "../components/aboutUs/gridItem";
import Ico from "../components/ico";
import icoArrow from '../assets/icons/arrow.svg';
import icoZarinpal from '../assets/icons/zarinpal.svg';
import icoWatch from '../assets/icons/watch.svg';
import icoShoppingBag from '../assets/icons/shopping-bag.svg';

const AboutUs = () => {
    const services = [
        {
            title: 'روش های پرداخت',
            ico: icoZarinpal,
            content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.'
        },
        {
            title: 'خرید اینترنتی',
            ico: icoShoppingBag,
            content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.'
        },
        {
            title: 'ارسال رایگان',
            ico: icoArrow,
            content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.'
        },
        {
            title: 'مرجوع کالا',
            ico: icoWatch,
            content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.'
        },
    ]
    const functionality = [
        {
            title: 'خلاقیت',
            percent: 82
        },
        {
            title: 'تبلیغات',
            percent: 82
        },
        {
            title: 'طراحی',
            percent: 70
        },
    ];
    return (
        <div className='w-full'>
            <PageInfo title='درباره ما' path='درباره ما' />
            <div className='w-full flex items-center gap-y-14 flex-col my-14'>
                <div className='w-5/6'>
                    <GridItem imgSrc={imgVideoBanner} className='!aspect-video'>
                        <div className='overlay flex justify-center items-center bg-black z-10 group-hover:bg-opacity-50 transition-colors'>
                            <Ico src={icoPlay} className='cursor-pointer filter drop-shadow-sm w-14 h-14' />
                        </div>
                    </GridItem>
                </div>

                <Informations items={services} />

                <div className='w-5/6 flex flex-col md:flex-row gap-x-10 gap-y-5 items-center'>
                    <div className='w-full md:w-3/5'>
                        <h3 className='font-bold text-xl mb-2'>عملکرد در بهترین حالت ممکن</h3>
                        <p className='leading-7'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد
                        </p>
                    </div>
                    <div className='w-full md:w-2/5'>
                        {functionality.map(({ title, percent }, index) =>
                            <div key={index} className="progress mb-[20px] lg:last:mb-0">
                                <div className="flex justify-between items-center mb-3 text-black">
                                    <span className="text-base">{title}</span>
                                    <span className="text-sm">{percent}%</span>
                                </div>
                                <div className="w-full bg-gray-300 rounded-full h-[3px]">
                                    <div className="bg-400 h-[3px] bg-gray-600 rounded-full" style={{ width: `${percent}%` }}>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className='w-5/6 flex gap-3 flex-col'>
                    <div className='flex gap-3'>
                        <div className='w-2/3 flex gap-3 flex-col'>
                            <GridItem imgSrc={img2} />
                            <GridItem imgSrc={img3} />
                        </div>
                        <GridItem imgSrc={img1} className='w-1/3' />
                    </div>

                    <div className='w-full flex gap-3'>
                        <GridItem imgSrc={img5} className='w-1/3 !aspect-video' />
                        <GridItem imgSrc={img4} className='w-2/3' />
                    </div>
                </div>

                <div className='w-5/6 grid md:grid-cols-2 grid-cols-1 gap-y-5'>
                    <div>
                        <h3 className='text-2xl font-bold mb-2 text-gray-900'>شاهرود</h3>
                        <p className='max-w-xs'>
                            ایران، استان سمنان، شهرستان شاهرود خیابان آزادگان، کوچه آزادگان دوم<br />
                            ۰۹۳۹ ۰۰۰ ۳۴۰۶<br />
                            info@shapo.com
                        </p>
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold mb-2'>تهران</h3>
                        <p className='max-w-xs'>
                            ایران، استان تهران خیابان سعادت آباد کوچه دوم<br />
                            ۰۹۳۹ ۰۰۰ ۳۴۰۶<br />
                            office@shapo.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AboutUs; 