const Row = ({ children, title, className = '' }) => {
    return (
        <div className={`${className} w-full flex flex-wrap items-start border-b py-6`}>
            {title !== undefined ? <h3 className='ml-3 mb-3 text-[17px]'>{title}</h3> : null}
            {children}
        </div>
    );
}
export default Row;