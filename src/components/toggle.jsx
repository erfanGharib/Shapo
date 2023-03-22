const Toggle = () => {
    return (
        <label className="relative inline-flex items-center cursor-pointer mt-0.5">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-9 h-5 top-0 relative bg-gray-200 rounded-full dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-gold"></div>
        </label>
    );
}
export default Toggle;