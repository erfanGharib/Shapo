import { useSelector } from 'react-redux';
import PageInfo from '../components/pageInfo';
import ProductGrid from '../components/product/productGrid'
import Sidebar from '../components/product/sidebar';
const Shop = () => {   
    const { data } = useSelector(state => state.$_products);

    return (
        <>
            <PageInfo title='فروشگاه' path='فروشگاه' />
            <div className='mainPart lg:flex-row !items-start'>
                <ProductGrid products={data} />
                <Sidebar />
            </div>
        </>
    );
}
export default Shop;