import { Link } from "react-router-dom";
import logo from '../../assets/logo192.png'
import Btn from "../btn";
import SearchBox from "./searchBox";
import Sidebar from "./sidebar";
import icoHeart from '../../assets/icons/heart.svg';
import icoUser from '../../assets/icons/user.svg';
import icoShoppingBag from '../../assets/icons/shopping-bag.svg';
import { useState } from "react";

const Navbar = () => {
    const [navCssClass, setNavCssClass] = useState(false);

    const scrollFunction = () => {
        if (document.documentElement.scrollTop >= 10) {
            setNavCssClass(true);
        }
        else setNavCssClass(false);
    }
    window.addEventListener('scroll', scrollFunction);

    return (
        <nav className={`${navCssClass ? 'bg-white border-b' : ''} fixed w-full transition-colors py-2 md:py-4 z-20`}>
            <div className='w-5/6 mx-auto flex justify-between items-center'>
                <div className='w-1/3'>
                    <div className='flex justify-between w-48'>
                        <Sidebar />
                        <Btn icoSrc={icoShoppingBag} count={0} />
                        <Btn icoSrc={icoHeart} count={0} />
                        <Btn icoSrc={icoUser} />
                    </div>
                </div>

                <div class="flex justify-end sm:justify-center items-center w-1/3">
                    <Link to="/">
                        <img src={logo} alt="logo" width='70' className='mt-2' />
                    </Link>
                </div>

                <SearchBox />
            </div>
        </nav>
    );
}
export default Navbar;