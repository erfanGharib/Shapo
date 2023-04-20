import { useEffect } from "react";
import AddToCart from "../components/cart/addToCart/addToCart";
import QtyInput from "../components/cart/addToCart/qtyInput";
import PageInfo from "../components/pageInfo";
import Price from '../components/price'
import ProductTabs from "../components/product/productTab/productTabs";

const ProductPage = props => {
    const { id, name, price, oldPrice, desc, inventory, imgUrl, cat, tag, tabs } = props.data;

    return (
        <div className='w-full'>
            <PageInfo title={name} path={name} />
            <div className='border-b' id="product">
                <div className='mainPart md:flex-row mb-14'>
                    <div className='md:w-1/2 w-full aspect-square flex justify-center relative p-10 bg-[#efeff1]'>
                        {inventory > 0 ?
                            null :
                            <span className='bg-black absolute text-white px-3 right-0 mr-10 h-max py-1'>ناموجود</span>
                        }
                        <img src={imgUrl} alt={name} className='w-full m-auto' />
                    </div>

                    <div className='md:w-1/2 w-full aspect-square'>
                        <h1 className='text-2xl font-bold'>{name}</h1>
                        <Price
                            price={price}
                            oldPrice={oldPrice}
                            className='text-gold text-2xl mt-3 mb-1'
                        />
                        <p>{desc}</p>

                        <div className='w-max flex gap-x-3 my-8'>
                            <QtyInput disabled={inventory <= 0} />

                            {inventory > 0 ?
                                <AddToCart /> :
                                <AddToCart
                                    disabled
                                    className='!bg-red-600 border-red-600 text-white hover:text-white'
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
                        <div className='mt-10'>
                            <span>این محصول را به اشتراک بگزارید:  </span>
                        </div>
                    </div>
                </div>
            </div>

            <ProductTabs data={tabs} productName={name} />
        </div>
    );
}
export default ProductPage; 