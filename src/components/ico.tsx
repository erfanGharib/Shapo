import { CSSProperties } from "react";

interface T_Props {
    className?: string;
    style?: CSSProperties;
    children: any;
}

const Ico = (props: T_Props) => {
    const { className = '', style = {}, children } = props;
    return (
        <i
            className={`${className} block w-6 h-6`} 
            style={style}
        >
            {children}
        </i>
    );
}

export default Ico;