import { useSelector } from "react-redux";

const SliderStatus = () => {
    const { status } = useSelector(state => state.$_sliderStatus);
    return (
        <div className='w-full absolute h-14 bottom-0 flex justify-center items-center gap-x-3'>
            {[0, 1, 2].map(v => {
                return <span className={`block w-2.5 h-2.5 rounded-full ${status === v ? 'bg-gold' : 'bg-gray-300'}`}></span>
            })}
        </div>
    );
}
export default SliderStatus;