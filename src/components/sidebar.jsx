import {ReactComponent as IcoClose} from '../assets/icons/close.svg';
import { useDispatch, useSelector } from "react-redux";
import { setStatus } from '../store/reducers/_sidebarStatus'
import Btn from "./btn";
import CartSidebar from './cart/cartSidebar';
import MainSidebar from './navbar/mainSidebar';

const Sidebar = () => {
    const dispatch = useDispatch();
    const { status, IS_MAIN_SIDEBAR } = useSelector(state => state.$_sidebarStatus);

    return (
        <>
            <div
                onClick={() => dispatch(setStatus())}
                className={`${status ? '!opacity-70' : 'opacity-0 invisible'} z-30 w-full h-screen transition-opacity duration-300 bg-black absoluteTopRight`}
            ></div>

            <div className={`${status ? 'translate-x-0' : 'translate-x-full'} z-40 px-10 py-6 md:w-96 w-full absoluteTopRight bg-white transform transition-transform duration-300 h-screen flex flex-col gap-y-10`}>
                <Btn ico={<IcoClose/>} onClick={() => dispatch(setStatus())} className='w-max' />
                
                {IS_MAIN_SIDEBAR ? <MainSidebar/> : <CartSidebar/>}
            </div>
        </>
    );
}
export default Sidebar;