import { Link } from "react-router-dom";
import logo from '../assets/logo192.png'

const Logo = () => (
    <Link to="/" className='relative'>
        <img src={logo} alt="logo" width='55' className='m-auto' />
    </Link>
);

export default Logo;