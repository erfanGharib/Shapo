import PageInfo from '../components/pageInfo';
import PostGrid from '../components/blog/postGrid'
import Btn from '../components/btn';

const Blog = () => {
    return (
        <>
            <PageInfo title='وبلاگ' path='وبلاگ' />
            <div className='flex justify-between items-center w-full gap-7 mx-auto my-14 flex-col'>
                <PostGrid IS_HOME_PAGE={false} />
                <Btn className='btn primary-btn'>بارگذاری بیشتر</Btn>
            </div>
        </>
    );
}
export default Blog;