import { useSelector } from "react-redux";

const SliderStatus = () => {
    const { status } = useSelector(state => state.$_sliderStatus);
    return (
        <div className='w-full absolute h-14 bottom-0 flex justify-center items-center'>
            {[0, 1, 2].map((v, index) =>
                <span
                    key={index}
                    className={`block w-2.5 h-2.5 rounded-full mx-1.5 ${status === v ? 'bg-gold' : 'bg-gray-300'}`}
                ></span>
            )}
        </div>
    );
}
export default SliderStatus;