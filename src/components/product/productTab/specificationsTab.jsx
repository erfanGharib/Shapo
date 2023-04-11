const SpecificationsTab = ({ specifications }) => {
    return (
        <>
            <div className="py-5 px-3 w-full grid grid-cols-2 gap-5 items-center border-b">
                {specifications.map(([ property, value ]) => 
                    <div className='w-2/5 min-w-[320px] max-w-[500px] text-sm'>
                        <strong className='ml-2'>{property}:</strong>
                        <span>{value}</span>
                    </div>
                )}
            </div>
        </>
    );
}
export default SpecificationsTab; 