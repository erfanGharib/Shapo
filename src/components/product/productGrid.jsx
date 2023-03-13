import Product from "./product";

const ProductGrid = ({ products, title = 'product slider' }) => {
    return (
        <div className="w-5/6 mx-auto flex flex-col items-center">
            <h2 className='text-3xl flex items-center flex-col'>{title}</h2>
            <div className='mt-7 flex flex-wrap gap-5 w-full'>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    );
}
export default ProductGrid;