import { Link } from "react-router-dom";
import Btn from "../btn";
import Sidebar from "./sidebar";
import icoHeart from '../../assets/icons/heart.svg';
import icoUser from '../../assets/icons/user.svg';
import icoShoppingBag from '../../assets/icons/shopping-bag.svg';
import { useState } from "react";
import Logo from "../logo";
import Input from "../input";
import icoSearch from '../../assets/icons/search.svg';
import icoBar from '../../assets/icons/bar.svg';
import { setStatus } from "../../store/reducers/_sidebarStatus";
import { useDispatch } from "react-redux";

const Navbar = () => {
    const [navCssClass, setNavCssClass] = useState(false);
    const [searchBoxStatus, setSearchBoxStatus] = useState(false);
    const dispatch = useDispatch();

    const scrollFunction = () => {
        if (document.documentElement.scrollTop >= 10) {
            setNavCssClass(true);
        }
        else setNavCssClass(false);
    }
    window.addEventListener('scroll', scrollFunction);

    return (
        <nav className={`${navCssClass ? 'bg-white border-b' : ''} fixed w-full transition-colors py-4 top-0 z-30`}>
            <div className='w-5/6 mx-auto flex justify-between items-center flex-wrap'>
                <div className='flex justify-start gap-x-2 w-1/3'>
                    <Sidebar />
                    <Btn className='pr-0' icoSrc={icoBar} onClick={() => dispatch(setStatus())} />
                    <Btn icoSrc={icoShoppingBag} count={0} />
                    <Btn icoSrc={icoUser} />
                    <Btn
                        icoSrc={icoSearch}
                        onClick={() => setSearchBoxStatus(!searchBoxStatus)}
                        className={`${searchBoxStatus ? 'border-b bg-gray-200 rounded-none' : ''} border-gray-100 bg-opacity-40 md:hidden`}
                    />
                    {/* <Btn icoSrc={icoHeart} count={0} /> */}
                </div>

                <div className="flex justify-end md:justify-center items-center w-1/3">
                    <Logo />
                </div>

                <div className={`${searchBoxStatus ? 'flex' : 'md:flex hidden'} transition-all z-20 w-full md:mt-0 mt-3 md:w-1/3 justify-center md:justify-end`}>
                    <Input placeholder='جست و جو ...' icoSrc={icoSearch} className='w-full md:max-w-[240px] max-w-none' />
                </div>
            </div>
        </nav>
    );
}
export default Navbar;