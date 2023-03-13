import Product from "./product";

const ProductSlider = ({ products, title = 'product slider' }) => {
    return (
        <div className="w-5/6 mx-auto flex flex-col items-center">
            <h2 className='text-3xl flex items-center flex-col'>{title}</h2>
            <div className='w-full'>
                <div className='mt-7 flex overflow-x-hidden gap-x-5 justify-start'>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </div>
    );
}
export default ProductSlider;