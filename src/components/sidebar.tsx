import { useDispatch, useSelector } from "react-redux";
import { T_SidebarStatus, setStatus } from '../store/reducers/_sidebarStatus'
import Btn from "./btn";
import CartSidebar from './cart/cartSidebar';
import MainSidebar from './navbar/mainSidebar';
import { T_AppStoreReducers } from "../store";
import Close from "../assets/icons/close";

const Sidebar = () => {
    const dispatch = useDispatch();
    const { status, IS_MAIN_SIDEBAR } = useSelector<T_AppStoreReducers, T_SidebarStatus>(state => state.$_sidebarStatus);

    return (
        <>
            <div
                onClick={() => dispatch(setStatus())}
                className={`${status ? '!opacity-70' : 'opacity-0 invisible'} z-30 w-full h-screen transition-all duration-300 bg-black absoluteTopRight`}
            ></div>

            <div className={`${status ? 'translate-x-0' : 'translate-x-full'} items-start z-40 px-10 py-6 md:w-96 w-full absoluteTopRight bg-white transform transition-transform duration-300 h-screen flex flex-col groupsidebar group-[sidebar>*,]:mb-8`}>
                <Btn ico={<Close/>} onClick={() => dispatch(setStatus())} className='hover:text-gold w-max' />
                
                {IS_MAIN_SIDEBAR ? <MainSidebar/> : <CartSidebar/>}
            </div>
        </>
    );
}
export default Sidebar;