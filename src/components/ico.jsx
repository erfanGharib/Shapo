const Ico = ({ src, className = '', style = '' }) => {
    return ( 
        <i
            className={className} 
            style={{
                ...style,
                backgroundImage: `url(${src})`
            }}
        ></i>
    );
}
export default Ico;