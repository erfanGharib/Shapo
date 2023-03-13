import Post from "../blog/post";

const PostGrid = ({ products }) => {
    return (
        <div className="w-5/6 mx-auto flex flex-col items-center">
            <h2 className='text-3xl flex items-center flex-col'>وبلاگ</h2>
            <div className='mt-7 flex flex-wrap gap-5 w-full'>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}
export default PostGrid;