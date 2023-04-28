const Col = ({ children, title, className='' }) => {
    return (
        <div className={`${className} w-full flex flex-wrap space-y-3 items-start`}>
            {title !== undefined ? <h3 className='ml-3'>{title}</h3> : null}
            {/* <div className='w-full'> */}
                {children}
            {/* </div> */}
        </div>
    );
}
export default Col;