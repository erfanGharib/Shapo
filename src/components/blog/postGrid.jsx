import Post from "../blog/post";
import PageCounter from "../pageCounter";

const PostGrid = ({ posts, IS_HOME_PAGE = true }) => {
    return (
        <div className={`${IS_HOME_PAGE ? 'w-5/6' : 'w-full'} mx-auto flex flex-col items-center`}>
            {IS_HOME_PAGE ? <h2 className='mb-7 text-3xl flex items-center flex-col'>وبلاگ</h2> : null}
            <div className={`${IS_HOME_PAGE ? 'sm:grid-cols-3' : 'sm:grid-cols-2'} flex-wrap gap-5 w-full grid grid-cols-1`}>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}
export default PostGrid;