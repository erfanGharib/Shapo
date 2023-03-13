import { Provider } from "react-redux";
import { Outlet, Link } from "react-router-dom"
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import store from "../store";

const Layout = () => {
    return (
        <Provider store={store}>
            <Navbar />
            <Outlet />
            <Footer />
        </Provider>
    );
}
export default Layout;