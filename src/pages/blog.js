import PageInfo from '../components/pageInfo';
import PostGrid from '../components/blog/postGrid'
import Btn from '../components/btn';
import { useDispatch, useSelector } from 'react-redux';
import { showMoreItem } from '../store/reducers/_posts';

const Blog = () => {
    const { data, itemsToShow } = useSelector(state => state.$_posts);
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