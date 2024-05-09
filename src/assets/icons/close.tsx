interface T_Props {
	className?: string
	width?: number
}

const Close = ({ className = '', width = 16 }: T_Props) => {
    return (
		<svg width={width} className={className} stroke="currentColor" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 12.5 12.8">
		<g>
			<line x1="9.4" y1="3.3" x2="6.3" y2="6.4"/>
			<line x1="9.4" y1="9.6" x2="6.3" y2="6.4"/>
			<line x1="3.1" y1="9.5" x2="6.3" y2="6.4"/>
			<line x1="3.1" y1="3.2" x2="6.3" y2="6.4"/>
		</g>
		</svg>
    );
}

export default Close;

