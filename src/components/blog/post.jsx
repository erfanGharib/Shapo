import imgDefaultPost from '../../assets/images/products/default.svg'

const Post = ({ 
    title = 'نام پست',
    imgSrc = imgDefaultPost,
    date,
    creator = 'ادمین',
}) => {
    return (
        <div className="min-w-[32%] max-w-[32%] w-1/4 flex flex-col items-start">
            <div className='w-full h-48 flex relative py-3 items-center group overflow-hidden md:cursor-pointer'>
                <img src={imgSrc} alt={title} className='w-full' />
                <div className='absolute bg-white py-2 px-5 bottom-3 group-hover:translate-x-0 translate-x-full transform duration-300 transition-transform'>
                    مطالب بیشتر
                </div>
            </div>
            <h3 className='my-2 text-xl  md:cursor-pointer'>{title}</h3>
            <span className='text-gray-400'>
                {date} 
                <span className='text-gray-200 mx-3'>/</span>
                {creator}
            </span>
        </div>
    );
}
export default Post;