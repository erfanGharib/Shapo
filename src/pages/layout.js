import { Provider } from "react-redux";
import { Outlet, Link } from "react-router-dom"
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import store from "../store";

const Layout = () => {
    return (
        <Provider store={store}>
            <Navbar />
            <div className='mt-20'>
                <Outlet />
            </div>
            <Footer />
        </Provider>
    );
}
export default Layout;