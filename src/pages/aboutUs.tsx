import PageInfo from "../components/pageInfo";
import GridItem from "../components/aboutUs/gridItem";
import Informations from "../components/informations";
import img1 from '../assets/images/aboutUs/1-780x770.jpg';
import img2 from '../assets/images/aboutUs/2-380x380.jpg';
import img3 from '../assets/images/aboutUs/3-380x380.jpg';
import img4 from '../assets/images/aboutUs/4-380x380.jpg';
import img5 from '../assets/images/aboutUs/5-780x380.jpg';
import imgVideoBanner from '../assets/images/aboutUs/video-banner.jpg';
import Zarinpal from "../assets/icons/zarinpal";
import ShoppingBag from "../assets/icons/shopping-bag";
import Arrow from "../assets/icons/arrow";
import Watch from "../assets/icons/watch";
import Play from "../assets/icons/play";

const AboutUs = () => {
    const services = [
        {
            title: 'روش های پرداخت',
            ico: <Zarinpal />,
            content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.'
        },
        {
            title: 'خرید اینترنتی',
            ico: <ShoppingBag />,
            content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.'
        },
        {
            title: 'ارسال رایگان',
            ico: <Arrow />,
            content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.'
        },
        {
            title: 'مرجوع کالا',
            ico: <Watch />,
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
        <>
            <PageInfo title='درباره ما' path='درباره ما' />
            <div className='mainPart !space-y-14'>
                <div className='w-full'>
                    <GridItem imgSrc={imgVideoBanner}>
                        <div className='overlay flex justify-center items-center bg-black z-10 group-hover:bg-opacity-50 transition-colors'>
                            <Play className='cursor-pointer filter drop-shadow-lg w-14 h-14' />
                        </div>
                    </GridItem>
                </div>

                <Informations items={services} />

                <div className='w-full flex flex-col md:flex-row items-center'>
                    <div className='w-full md:w-3/5 md:ml-10 md:mb-0 mb-8'>
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
                                    <div className="bg-400 h-full bg-gray-600 rounded-full" style={{ width: `${percent}%` }}>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className='w-full flex flex-col -ml-3'>
                    <div className='flex'>
                        <div className='w-[32.5%] h-full flex flex-col'>
                            <GridItem imgSrc={img2} />
                            <GridItem imgSrc={img3} />
                        </div>
                        <GridItem imgSrc={img1} className='w-[67.5%] md:!mr-3 !mr-1.5' />
                    </div>

                    <div className='w-full flex'>
                        <GridItem imgSrc={img5} className='w-[67.5%]' />
                        <GridItem imgSrc={img4} className='w-[32.5%] md:mr-3 mr-1.5' />
                    </div>
                </div>

                <div className='w-full grid md:grid-cols-2 grid-cols-1'>
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
        </>
    );
}
export default AboutUs; 