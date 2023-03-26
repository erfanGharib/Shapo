const GridItem = ({ imgSrc, className, children }) => {
    return (
        <div className={`w-full aspect-square relative group overflow-hidden ${className}`}>
            <div 
                className='bg-cover w-full h-full bg-center transition-transform duration-700 group-hover:scale-110 group-hover:transform'
                style={{backgroundImage: `url(${imgSrc})`}}
            ></div>
            {children}
        </div>
    );
}
export default GridItem; 