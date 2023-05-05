const Ico = ({ className = '', style = '', children }) => {
    return ( 
        <i
            className={`${className} block w-6 h-6`} 
            style={{...style}}
        >
            {children}
        </i>
    );
}
export default Ico;