import { useSelector } from "react-redux";
import { T_AppStoreReducers } from "../../store";
import { T_SliderStatus } from "../../store/reducers/_sliderStatus";

interface T_Props {
    length?: number
}

const SliderStatus = ({ length }: T_Props) => {
    const { status } = useSelector<T_AppStoreReducers, T_SliderStatus>(state => state.$_sliderStatus);
    return (
        <div className='w-full absolute h-14 bottom-0 flex justify-center items-center'>
            {Array.from({ length }).map((v, index) =>
                <span
                    key={index}
                    className={`block w-2.5 h-2.5 rounded-full mx-1.5 ${status === index ? 'bg-gold' : 'bg-gray-300'}`}
                ></span>
            )}
        </div>
    );
}
export default SliderStatus;