import Post from "../blog/post";

const PostGrid = ({ posts, IS_HOME_PAGE = true }) => {
    return (
        <div className='w-5/6 mx-auto flex flex-col items-center'>
            {IS_HOME_PAGE ? <h2 className='mb-7 text-3xl flex items-center flex-col'>وبلاگ</h2> : null}
            <div className='md:grid-cols-3 grid-cols-1 flex-wrap gap-5 w-full grid'>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}
export default PostGrid;