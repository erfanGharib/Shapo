type T_Props = {
    imgSrc: string;
    className?: string
    children?: any
}
const GridItem = ({ imgSrc, className = '', children }: T_Props) => {
    return (
        <div className={`h-full relative group overflow-hidden md:mb-3 mb-1.5 ${className}`}>
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