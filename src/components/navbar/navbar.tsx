import Btn from "../btn";
import Sidebar from "../sidebar";
import { useState } from "react";
import Logo from "../logo";
import { useDispatch, useSelector } from "react-redux";
import SearchBox from "./searchBox";
import { T_SearchBox, setSearchBoxStatus } from "../../store/reducers/_searchBox";
import ShoppingBag from "../../assets/icons/shopping-bag";
import User from "../../assets/icons/user";
import Search from "../../assets/icons/search";
import { setStatus } from "../../store/reducers/_sidebarStatus";
import Bar from "../../assets/icons/bar";
import { T_AppStoreReducers } from "../../store";
import { T_Cart } from "../../store/reducers/_cart";

const Navbar = () => {
    const [navCssClass, setNavCssClass] = useState(false);
    const { status } = useSelector<T_AppStoreReducers, T_SearchBox>(state => state.$_searchBox);
    const { data: cartData } = useSelector<T_AppStoreReducers, T_Cart>(state => state.$_cart);
    const dispatch = useDispatch();

    const scrollFunction = () => {
        if (document.documentElement.scrollTop >= 10) {
            setNavCssClass(true);
        }
        else setNavCssClass(false);
    }
    window.addEventListener('scroll', scrollFunction);

    return (
        <nav className={`${navCssClass ? 'bg-white border-b' : ''} ${status ? '' : 'h-20'} fixed w-full transition-all py-4 top-0 z-30`}>
            <div className='w-5/6 mx-auto flex justify-between items-center flex-wrap'>
                <div className='flex justify-start w-1/3' id="navbarLinks">
                    <Sidebar/>
                    <Btn className='-mr-4' ico={<Bar/>} onClick={() => dispatch(setStatus(true))} />
                    <Btn ico={<ShoppingBag/>} count={cartData.length} onClick={() => dispatch(setStatus(false))} />
                    <Btn ico={<User/>} />                    
                    
                    <Btn 
                        ico={<Search/>}
                        onClick={() => dispatch(setSearchBoxStatus(!status))}
                        className={`${status ? 'border-b border-gray-300 bg-gray-200' : ''} rounded-none border-gray-100 bg-opacity-40 md:hidden`}
                    />
                </div>

                <div className="flex justify-end md:justify-center items-center w-1/3">
                    <Logo />
                </div>

                <SearchBox/>
            </div>
        </nav>
    );
}
export default Navbar;