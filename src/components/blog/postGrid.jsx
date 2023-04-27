import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { showLessItem } from "../../store/reducers/_posts";
import Post from "../blog/post";

const PostGrid = ({ IS_HOME_PAGE = true }) => {
    const { data: posts, itemsToShow } = useSelector(state => state.$_posts);
    const dispatch = useDispatch();
    useEffect(() => {
        if(IS_HOME_PAGE) dispatch(showLessItem());
    });

    return (
        <div id="postGrid" className='flex flex-col items-center md:-ml-5'>
            {   
                IS_HOME_PAGE ? 
                <Link to='/blog'>
                    <h2 className='mb-7 text-3xl flex items-center flex-col'>وبلاگ</h2>
                </Link> : 
                null
            }
            <div className='flex flex-wrap w-full'>
                {posts.map((data, index) => {
                    if(index < itemsToShow) return <Post key={index} data={data} />
                    return null
                })}
            </div>
        </div>
    );
}
export default PostGrid;