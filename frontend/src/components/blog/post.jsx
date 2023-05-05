import imgDefaultPost from '../../assets/images/products/default.svg'

const Post = ({ data }) => {
    const { title = 'نام پست', coverImg = imgDefaultPost, dateCreated, creator = 'ادمین' } = data;
    return (
        <div className="md:w-1/3 w-full flex flex-col items-start justify-start md:pl-5 mb-5">
            <div style={{aspectRatio: '3 / 2'}} className='w-full flex relative items-center group overflow-hidden md:cursor-pointer'>
                <img src={coverImg} alt={title} className='w-full' />
                <div className='absolute bg-white py-2 px-5 bottom-3 group-hover:translate-x-0 translate-x-full transform duration-300 transition-transform'>
                    مطالب بیشتر
                </div>
            </div>
            <h3 className='my-1 text-xl  md:cursor-pointer'>{title}</h3>
            <span className='text-gray-400'>
                {dateCreated} 
                <span className='text-gray-200 mx-3'>/</span>
                {creator}
            </span>
        </div>
    );
}
export default Post;