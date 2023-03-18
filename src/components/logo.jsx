import { Link } from "react-router-dom";
import logo from '../assets/logo192.png'

const Logo = () => (
    <Link to="/" className='relative bottom-1.5'>
        <img src={logo} alt="logo" width='55' className='mt-2' />
    </Link>
);

export default Logo;