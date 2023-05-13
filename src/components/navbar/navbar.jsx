import Btn from "../btn";
import Sidebar from "../sidebar";
import {ReactComponent as IcoUser} from '../../assets/icons/user.svg';
import {ReactComponent as IcoShoppingBag} from '../../assets/icons/shopping-bag.svg';
import { useState } from "react";
import Logo from "../logo";
import Input from "../input";
import {ReactComponent as IcoSearch} from '../../assets/icons/search.svg';
import {ReactComponent as IcoBar} from '../../assets/icons/bar.svg';
import { setStatus } from "../../store/reducers/_sidebarStatus";
import { useDispatch, useSelector } from "react-redux";
import SearchBox from "./searchBox";

const Navbar = () => {
    const [navCssClass, setNavCssClass] = useState(false);
    const dispatch = useDispatch();
    const { data: cartData } = useSelector(state => state.$_cart);

    const scrollFunction = () => {
        if (document.documentElement.scrollTop >= 10) {
            setNavCssClass(true);
        }
        else setNavCssClass(false);
    }
    window.addEventListener('scroll', scrollFunction);

    return (
        <nav className={`${navCssClass ? 'bg-white border-b' : ''} fixed w-full transition-all py-4 top-0 z-30`}>
            <div className='w-5/6 mx-auto flex justify-between items-center flex-wrap'>
                <div className='flex justify-start w-1/3' id="navbarLinks">
                    <Sidebar/>
                    <Btn className='-mr-4' ico={<IcoBar/>} onClick={() => dispatch(setStatus(true))} />
                    <Btn ico={<IcoShoppingBag/>} count={cartData.length} onClick={() => dispatch(setStatus(false))} />
                    <Btn ico={<IcoUser/>} />
                </div>

                <div className="flex justify-end md:justify-center items-center w-1/3">
                    <Logo />
                </div>

                <SearchBox/>
                {/* <div className={`${searchBoxStatus ? '!opacity-0 !invisible !-top-5' : ''} opacity-100 visible top-0 relative transition-all z-20 w-full md:mt-0 mt-3 md:w-1/3 justify-center md:justify-end`}>
                    <Input placeholder='جست و جو ...' ico={<IcoSearch/>} className='w-full md:max-w-[240px] mr-auto max-w-none' />
                </div> */}
            </div>
        </nav>
    );
}
export default Navbar;