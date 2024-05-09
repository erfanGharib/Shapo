import PageInfo from '../components/pageInfo';
import PostGrid from '../components/blog/postGrid'
import Btn from '../components/btn';
import { useDispatch, useSelector } from 'react-redux';
import { T_PostsState, showMoreItem } from '../store/reducers/_posts';
import { T_AppStoreReducers } from '../store';

const Blog = () => {
    const { data, itemsToShow } = useSelector<T_AppStoreReducers, T_PostsState>((state) => state.$_posts);
    const dispatch = useDispatch();

    return (
        <>
            <PageInfo title='وبلاگ' path='وبلاگ' />
            <div className='mainPart'>
                <PostGrid IS_HOME_PAGE={false} />
                {
                    data.length !== itemsToShow ? 
                    <Btn 
                        className='btn primary-btn'
                        onClick={() => dispatch(showMoreItem())}
                    >بارگذاری بیشتر</Btn>:
                    null
                }
            </div>
        </>
    );
}
export default Blog;