const Col = ({ children, title }) => {
    return (
        <div className='w-full flex flex-wrap gap-y-3 items-start'>
            {title !== undefined ? <h3 className='ml-3'>{title}</h3> : null}
            {/* <div className='w-full'> */}
                {children}
            {/* </div> */}
        </div>
    );
}
export default Col;