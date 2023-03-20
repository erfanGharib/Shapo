import Post from "../blog/post";

const PostGrid = ({ posts }) => {
    return (
        <div className="w-5/6 mx-auto flex flex-col items-center">
            <h2 className='text-3xl flex items-center flex-col'>وبلاگ</h2>
            <div className='mt-7 flex-wrap gap-5 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}
export default PostGrid;