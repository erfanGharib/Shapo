import PageInfo from "../components/pageInfo";

const ProductPage = (props) => {
    console.log(props);
    const { id, name, price, oldPrice, desc, inventory } = props.data;
    return (
        <div className='w-full'>
            <PageInfo title={name} />
            <div className='w-full h-96 flex'>
                <div className='md:w-1/2 w-full aspect-square bg-gray-500'></div>
                <div className='md:w-1/2 w-full aspect-square bg-gray-300'></div>
            </div>
            <div></div>
        </div>
    );
}
export default ProductPage; 