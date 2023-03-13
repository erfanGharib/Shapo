import { useSelector } from 'react-redux';
import Container from '../container'

const MainSlider = () => {
    const { slide, status } = useSelector(state => state.$_mainSlider);
    const { imgSrc, supTitle, title, desc } = slide;

    return (
        <>
            <div className='flex h-full'>
                <div
                    style={{ backgroundImage: `url(${imgSrc})` }}
                    className='h-full min-w-full bg-cover bg-center flex items-center'
                >
                    <Container
                        title={title}
                        supTitle={supTitle}
                        desc={desc}
                        primary={true}
                        rtl={false}
                        tomanSign={false}
                    />
                </div>
            </div>
            <div className='w-full absolute h-14 bottom-0 flex justify-center items-center gap-x-3'>
                {[0, 1, 2].map(v => {
                    return <span className={`block w-2.5 h-2.5 rounded-full ${status === v ? 'bg-gold' : 'bg-gray-300'}`}></span>
                })}
            </div>
        </>
    );
}
export default MainSlider;