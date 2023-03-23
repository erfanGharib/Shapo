import PageInfo from '../components/pageInfo';
import ProductGrid from '../components/product/productGrid'
import Sidebar from '../components/product/sidebar';
const Shop = () => {
    return (
        <>
            <PageInfo title='فروشگاه' />
            <div className='flex justify-between w-5/6 gap-7 mx-auto my-12 md:my-20 md:flex-row flex-col'>
                <ProductGrid />
                <Sidebar />
            </div>
        </>
    );
}
export default Shop;