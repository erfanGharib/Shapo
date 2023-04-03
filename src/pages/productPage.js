import AddToCart from "../components/cart/addToCart/addToCart";
import PageInfo from "../components/pageInfo";
import Price from '../components/price'
import ProductTabs from "../components/product/productTab/productTabs";

const ProductPage = props => {
    const { id, name, price, oldPrice, desc, inventory, imgSrc, cat, tag } = props.data;
    return (
        <div className='w-full'>
            <PageInfo title={name} path={name} />
            <div className='border-b' id="product">
                <div className='mainPart md:flex-row mb-14'>
                    <div className='md:w-1/2 w-full aspect-square flex justify-center p-10 bg-[#efeff1]'>
                        <img src={imgSrc} alt={name} className='w-full m-auto' />
                    </div>

                    <div className='md:w-1/2 w-full aspect-square'>
                        <h1 className='text-2xl font-bold'>{name}</h1>
                        <Price
                            price={price}
                            oldPrice={oldPrice}
                            className='text-gold text-2xl mt-3 mb-1'
                        />
                        <p>{desc}</p>
                        <AddToCart/>
                        <div>
                            <p>
                                <span>دسته بندی:  </span>
                                <span className='text-gray-400'>{cat}</span>
                            </p>
                            <p>
                                <span>تگ:  </span>
                                <span className='text-gray-400'>{tag}</span>
                            </p>
                        </div>
                        <div className='mt-10'>
                            <span>این محصول را به اشتراک بگزارید:  </span>
                        </div>
                    </div>
                </div>
            </div>

            <ProductTabs/>
        </div>
    );
}
export default ProductPage; 