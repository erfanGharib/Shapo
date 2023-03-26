import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Post from "../blog/post";

const PostGrid = ({ IS_HOME_PAGE = true }) => {
    const { data: posts, itemsToShow } = useSelector(state => state.$_posts);
    return (
        <div className='w-5/6 mx-auto flex flex-col items-center'>
            {   
                IS_HOME_PAGE ? 
                <Link to='/blog'>
                    <h2 className='mb-7 text-3xl flex items-center flex-col'>وبلاگ</h2>
                </Link> : 
                null
            }
            <div className='md:grid-cols-3 grid-cols-1 flex-wrap gap-5 w-full grid'>
                {posts.map((data, index) => {
                    if(index < itemsToShow) return <Post key={index} data={data} />
                    return null
                })}
            </div>
        </div>
    );
}
export default PostGrid;