import Post from "../blog/post";

const PostGrid = ({ posts, itemsToShow, IS_HOME_PAGE = true }) => {
    console.log(posts);
    return (
        <div className='w-5/6 mx-auto flex flex-col items-center'>
            {IS_HOME_PAGE ? <h2 className='mb-7 text-3xl flex items-center flex-col'>وبلاگ</h2> : null}
            <div className='md:grid-cols-3 grid-cols-1 flex-wrap gap-5 w-full grid'>
                {posts.map((data, index) => {
                    if(index < itemsToShow) return <Post data={data} />
                    return null
                })}
            </div>
        </div>
    );
}
export default PostGrid;