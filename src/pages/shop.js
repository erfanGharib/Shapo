import PageInfo from '../components/pageInfo';
import ProductGrid from '../components/product/productGrid'
import Sidebar from '../components/product/sidebar';
const Shop = () => {
    return (
        <>
            <PageInfo title='فروشگاه' path='فروشگاه' />
            <div className='mainPart md:flex-row !items-start'>
                <ProductGrid />
                <Sidebar />
            </div>
        </>
    );
}
export default Shop;