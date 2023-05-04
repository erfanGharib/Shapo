const GridItem = ({ imgSrc, className = '', children }) => {
    return (
        <div className={`w-full h-full relative group overflow-hidden md:mb-3 mb-1.5 ${className}`}>
            <img 
                src={imgSrc} 
                alt='' 
                className='w-full h-full transition-transform duration-700 group-hover:scale-110 group-hover:transform' 
            />
            {children}
        </div>
    );
}
export default GridItem; 