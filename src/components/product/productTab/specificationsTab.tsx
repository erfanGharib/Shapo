import { T_Product } from "../../../data/productData";

const SpecificationsTab = ({ specifications }: { specifications: T_Product['tabs']['specifications'] }) => {
    return (
        <>
            <div className="py-5 px-3 w-full grid md:grid-cols-2 grid-cols-1 items-center border-b">
                {specifications.map(([ property, value ], index) => 
                    <div key={index} className='w-2/5 min-w-[320px] max-w-[500px] text-sm mb-3'>
                        <strong className='ml-2'>{property}:</strong>
                        <span>{value}</span>
                    </div>
                )}
            </div>
        </>
    );
}
export default SpecificationsTab; 