import ProductGrid from '../components/product/productGrid'
import Sidebar from '../components/product/sidebar/sidebar';
const Shop = () => {
    return (
        <>
            <div id='thisPageInfo' className='w-full h-40 bg-gray-50'>
                <div className='w-5/6 h-full m-auto items-center flex-col gap-2 justify-center sm:flex-row flex sm:justify-between text-gray-800'>
                    <h1 className='font-bold text-3xl'>فروشگاه</h1>
                    <div>خانه / فروشگاه</div>
                </div>
            </div>

            <div className='flex justify-between w-5/6 gap-7 mx-auto my-12 md:my-20 md:flex-row flex-col'>
                <ProductGrid />
                <Sidebar />
            </div>
        </>
    );
}
export default Shop;