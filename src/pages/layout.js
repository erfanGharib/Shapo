import store from "../store";
import { useEffect, useRef } from "react";
import Btn from "../components/btn";
import { Provider } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import { ReactComponent as IcoArrowTop } from '../assets/icons/arrow-top.svg'

const Layout = () => {
    const backTopRef = useRef();
    const location = useLocation();

    const backTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }
    useEffect(() => {
        const scrollFunction = () => {
            if (document.documentElement.scrollTop >= 70) {
                backTopRef.current.classList.remove('hidden')
            }
            else backTopRef.current.classList.add('hidden')
        }
        window.addEventListener('scroll', scrollFunction);
    }, [backTopRef])

    useEffect(() => {
        backTop();
    }, [location])

    return (
        <Provider store={store}>
            <Navbar />
            <div className='mt-20'>
                <Outlet />
            </div>
            <Footer />
            <Btn
                btnRef={backTopRef}
                ico={<IcoArrowTop />}
                className='bg-gold rounded-full hidden z-30 !fixed right-10 bottom-10'
                onClick={backTop}
            />
        </Provider>
    );
}
export default Layout;