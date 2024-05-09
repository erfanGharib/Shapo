import { useState } from "react";
import AddToCart from "../components/cart/addToCart/addToCart";
import QtyInput from "../components/cart/addToCart/qtyInput";
import PageInfo from "../components/pageInfo";
import Price from '../components/price'
import ProductLabels from "../components/product/productLabels";
import ProductTabs from "../components/product/productTab/productTabs";
import { T_Product } from "../data/productData";

const ProductPage = (props: { data: T_Product }) => {
    const data = {...props.data};
    const { name, price, oldPrice, desc, inventory, imgUrl, cat, tag, tabs } = data;
    
    const [qty, setQty] = useState(1);
    const shareProduct = () => {
        const dataToShare = {
            title: name,
            text: 'سلام! به این محصول جذاب و دیدنی یک نگاه بنداز!',
            url: window.location.href
        }

        if(window.navigator.canShare && window.navigator.canShare(dataToShare)) {
            window.navigator.share(dataToShare);
        }
    }

    data.qty = qty;

    return (
        <div className='w-full'>
            <PageInfo title={name} path={name} />
            <div className='border-b' id="product">
                <div className='mainPart md:flex-row mb-14'>
                    <div className='md:w-1/2 w-full h-full aspect-square flex justify-center relative bg-[#efeff1]'>
                        <ProductLabels 
                            price={price} 
                            oldPrice={oldPrice} 
                            inventory={inventory} 
                            textSize={'text-lg'} 
                        />
                        <img src={imgUrl} alt={name} className='w-full m-auto' />
                    </div>

                    <div className='md:w-1/2 justify-start items-start w-full md:mr-7 mt-7 aspect-square'>
                        <h1 className='text-2xl font-bold'>{name}</h1>
                        <Price
                            price={price}
                            oldPrice={oldPrice}
                            className='text-gold text-2xl mt-3 flex mb-1'
                        />
                        <p>{desc}</p>

                        <div className='w-max flex my-7'>
                            {inventory <= 0 ? null : <QtyInput setQty={setQty} />}

                            {inventory > 0 ?
                                <AddToCart 
                                    product={data} 
                                    className='mr-3' 
                                /> :
                                <AddToCart
                                    disabled
                                    className='!bg-red-600 !border-red-600 text-white hover:text-white'
                                >
                                    محصول در انبار موجود نمیباشد
                                </AddToCart>
                            }
                        </div>

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
                        <div onClick={shareProduct} className='mt-10'>
                            <span>این محصول را به اشتراک بگزارید</span>
                        </div>
                    </div>
                </div>
            </div>

            <ProductTabs tabs={tabs} productName={name} productImg={imgUrl} />
        </div>
    );
}
export default ProductPage; 