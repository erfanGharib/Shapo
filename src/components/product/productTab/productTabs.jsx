import React, { useState } from "react";
import Btn from "../../btn";
import CommentsTab from "./commentsTabs";
import DescTab from "./descTab";
import SpecificationsTab from "./specificationsTab";

const ProductTabs = ({ data = '', productName }) => {
    const { fullDesc, comments, specifications } = data;
    const productInfoTabs = [
        {
            title: 'توضیحات',
            component: <DescTab fullDesc={fullDesc} />,
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
        <div className='mainPart !gap-0'>
            <div className="ml-auto w-full mt-14 border-b border-gray-200">
                <ul className="flex items-center gap-x-5 flex-wrap text-sm font-medium" id="productInfoTab" role="tablist">
                    {productInfoTabs.map((tab, index) => (
                        <li key={tab.title} role="presentation">
                            <Btn
                                className={`mx-0 !min-w-[20px] px-2 ${index === currentTab ? 'text-gold border-b-2 border-gold relative top-px' : ''}`}
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