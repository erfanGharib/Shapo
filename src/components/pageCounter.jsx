import Btn from "./btn";
const PageCounter = ({ pageCount = 1, currentPage = 1 }) => {
    return (
        pageCount > 1 ?
            <div className='w-full my-3 h-20 flex justify-center items-center space-x-3' id='pageCounter'>
                {currentPage === 1 ? null : <Btn>قبلی</Btn>}

                {/* <Btn>1</Btn> */}
                {[...Array(pageCount)].map((_, index) =>
                    <Btn className={currentPage === index+1 ? 'gold-btn' : ''}>
                        {index+1}
                    </Btn>
                )}
                {/* <Btn>{pageCount}</Btn> */}

                {pageCount === currentPage ? null : <Btn>بعدی</Btn>}
            </div> :
            <></>
    )
}
export default PageCounter;