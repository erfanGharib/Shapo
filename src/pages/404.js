import { Link } from "react-router-dom";
import notFound from '../assets/images/notFound.jpg'

const NoPage = () => {
    return (
        <section className="h-[54vh] flex justify-center items-center">
            <div className='mt-12'>
                <img src={notFound} alt='notFound' width={250} />
                <p className='text-gray-500 my-4'>صفحه ای که دنبالش هستید وجود ندارد!</p>
                <Link to='/' className="btn mx-auto hover:text-gold text-white border !border-gold bg-gold hover:bg-transparent">صفحه اصلی</Link>
            </div>
        </section>
    );
}
export default NoPage;