import Container from '../container'
import imgSlider1 from '../../assets/images/mainSlider/1.jpg'
import imgSlider2 from '../../assets/images/mainSlider/2.jpg'
import imgSlider3 from '../../assets/images/mainSlider/3.jpg'

const Slider = ({ containerRef, sliderRef }) => {
    const slides = [
        {
            imgSrc: imgSlider1,
            supTitle: 'مجموعه صندلی های 1401',
            title: 'به فروشگاه شاپو خوش آمدید',
            desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
        },
        {
            imgSrc: imgSlider2,
            supTitle: 'مجموعه صندلی های 1401',
            title: 'به فروشگاه شاپو خوش آمدید',
            desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
        },
        {
            imgSrc: imgSlider3,
            supTitle: 'مجموعه صندلی های 1401',
            title: 'به فروشگاه شاپو خوش آمدید',
            desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
        },
    ];

    return (
        <>
            <div className='flex items-center h-full w-full relative'>
                <div className='flex justify-start h-full transition-transform duration-700' ref={sliderRef}>
                    {slides.map(({ imgSrc, supTitle, title, desc }, index) =>
                        <div
                            key={index}
                            style={{ backgroundImage: `url(${imgSrc})` }}
                            className='h-full min-w-full items-center relative flex -z-10 bg-cover transition-all duration-500 bg-[35%] md:bg-center'
                        >
                            <div 
                                style={{backgroundImage: 'linear-gradient(-90deg, white, #ffffff88)'}}
                                className='w-full h-full absoluteTopRight block md:hidden z-10'
                            ></div>
                            <Container
                                containerRef={containerRef[index]}
                                title={title}
                                supTitle={supTitle}
                                desc={desc}
                                url={'/shop'}
                                primary={true}
                                className='sliderContainer'
                                tomanSign={false}
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
export default Slider;