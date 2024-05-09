interface T_Props {
    className?: string
}

const ArrowLeft = ({ className = '' }: T_Props) => {
    return (
        <svg className={className} version="1.1" stroke="currentColor" fill="currentColor" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 12.5 12.8">
            <line className="st0" x1="10.8" y1="6.4" x2="1.7" y2="6.4"/>
            <line className="st0" x1="4.8" y1="3.3" x2="1.7" y2="6.4"/>
            <line className="st1" x1="4.8" y1="9.6" x2="1.3" y2="6"/>
        </svg>
    );
}

export default ArrowLeft;
