import { useState } from "react";
import { Link } from "react-router-dom";
import Ico from "../ico";
import icoBar from '../../assets/icons/bar.svg';

const Sidebar = () => {
    const [status, setStatus] = useState(false);

    return (
        <div class="flex flex-col md:flex-row mt-3 md:mt-0" id="navbar-collapse">
            <button onClick={() => setStatus(!status)} class="ml-2 py-1 rounded text-black" id="navbar-toggle">
                <Ico src={icoBar} />
            </button>
            <div className={`${status ? 'translate-x-0' : 'translate-x-full'} absolute right-0 bg-white transform transition`}>
                <Link to="about-us" className="btn lg:px-4 md:mx-2">درباره ما</Link>
                <Link to="shop" className="lg:px-4 md:mx-2">محصولات</Link>
                <Link to="contact-us" className="btn lg:px-4 md:mx-2">ارتباط با ما</Link>
                <Link to="#" className="btn lg:px-4 md:mx-2">ورود</Link>
                <Link to="#" className="btn lg:px-4 md:mx-2">ثبت نام</Link>
            </div>
        </div>
    );
}
export default Sidebar;