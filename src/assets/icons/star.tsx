const Star = ({ className = '' }) => {
    return <svg className={`${className} text-[#f5a623]`} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path></svg>
}
export default Star;
