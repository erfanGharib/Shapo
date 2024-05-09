import { useState } from "react";
import Btn from "../../btn";
import CommentsTab from "./commentsTabs";
import DescTab from "./descTab";
import SpecificationsTab from "./specificationsTab";
import { T_Product } from "../../../data/productData";

type T_Props = { 
    tabs: T_Product['tabs']
    productName: string
    productImg: string
}

const ProductTabs = ({ tabs, productName, productImg }: T_Props) => {
    const { fullDesc, comments, specifications } = tabs;

    const productInfoTabs = [
        {
            title: 'توضیحات',
            component: <DescTab fullDesc={fullDesc} productImg={productImg} />,
        },
        {
            title: 'مشخصات محصول',
            component: <SpecificationsTab specifications={specifications} />
        },
        {
            title: 'نظرات',
            component: <CommentsTab comments={comments} productName={productName} />
        },
    ];
    const [currentTab, setCurrentTab] = useState(0);
    return (
        <div className='mainPart !justify-start'>
            <div className="ml-auto w-full mt-14 border-b border-gray-200">
                <ul className="flex items-center flex-wrap md:text-base text-sm font-medium" id="productInfoTab" role="tablist">
                    {productInfoTabs.map((tab, index) => (
                        <li key={tab.title} role="presentation">
                            <Btn
                                className={`ml-3 md:ml-5 !min-w-[20px] px-2 ${index === currentTab ? 'text-gold border-b-2 border-gold relative top-px' : ''}`}
                                onClick={() => setCurrentTab(index)}
                            >
                                {tab.title}
                            </Btn>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='w-full flex flex-col'>
                {productInfoTabs[currentTab].component}
            </div>
        </div>
    );
}
export default ProductTabs; 