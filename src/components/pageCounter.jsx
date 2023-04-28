import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { backTop } from "..";
import { setCurrentPage } from "../store/reducers/_pageCounter";

import Btn from "./btn";
const PageCounter = ({ pageCount = 1 }) => {
    const dispatch = useDispatch();
    const { currentPage } = useSelector(state => state.$_pageCounter);
    
    useEffect(() => {
        // Issue: backTop will not work when prev && next button clicked
        // Solution: i put it in useEffect with currentPage dependency
        backTop();
    }, [currentPage])

    useEffect(() => {
        dispatch(setCurrentPage(1))
    }, []);

    return (
        pageCount > 1 ?
            <div className='w-full my-3 h-20 flex justify-center items-center' id='pageCounter'>
                <Btn
                    disabled={currentPage === 1}
                    onClick={() => dispatch(setCurrentPage(currentPage - 1))}
                >قبلی</Btn>

                {[...Array(pageCount)].map((_, index) =>
                    <Btn
                        key={index}
                        className={currentPage === index + 1 ? 'gold-btn ml-3' : ''}
                        onClick={() => dispatch(setCurrentPage(index + 1))}
                    >
                        {index + 1}
                    </Btn>
                )}

                <Btn
                    disabled={pageCount === currentPage}
                    onClick={() => dispatch(setCurrentPage(currentPage + 1))}
                >بعدی</Btn>
            </div> :
            <></>
    )
}
export default PageCounter;