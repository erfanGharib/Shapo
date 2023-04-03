import React, { useState } from "react";
import Btn from "../../btn";
import CommentsTab from "./commentsTabs";
import DescTab from "./descTab";
import SpecificationsTab from "./specificationsTab";

const ProductTabs = props => {
    const productInfoTabs = [
        {
            title: 'توضیحات',
            component: <DescTab/>
        },
        {
            title: 'مشخصات محصول',
            component: <SpecificationsTab/>
        },
        {
            title: 'نظرات',
            component: <CommentsTab/>
        },
    ];
    const [currentTab, setCurrentTab] = useState(0);
    return (
        <div className='mainPart !gap-0'>
            <div className="ml-auto w-full mt-14 border-b border-gray-200">
                <ul className="flex items-center gap-x-5 flex-wrap text-sm font-medium" id="productInfoTab" role="tablist">
                    {productInfoTabs.map((tab, index, { length }) => (
                        <React.Fragment key={tab.title}>
                            <li  role="presentation">
                                <Btn
                                    className={`mx-0 !min-w-[20px] ${index === currentTab ? 'text-gold border-b-2 border-gold relative top-px' : ''}`}
                                    onClick={() => setCurrentTab(index)}
                                >
                                    {tab.title}
                                </Btn>
                            </li>
                            {/* {index !== length - 1 ? <span>/</span> : null} */}
                        </React.Fragment>
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