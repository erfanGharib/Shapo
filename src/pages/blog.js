import PageInfo from '../components/pageInfo';
import PostGrid from '../components/blog/postGrid'
import Sidebar from '../components/blog/sidebar';
import PageCounter from '../components/pageCounter';

const Blog = () => {
    return (
        <>
            <PageInfo title='وبلاگ' />
            <div className='flex justify-between w-5/6 gap-7 mx-auto my-12 md:my-20 md:flex-row flex-col'>
                <div className="md:w-2/3 w-full flex flex-col items-center">
                    <div className='w-full mb-3 h-10 flex items-center justify-between'>
                        <span>
                            نشان دادن
                            9 از 19
                        </span>
                    </div>

                    <PostGrid IS_HOME_PAGE={false} />
                    <PageCounter pageCount={3} currentPage={2} />
                </div>

                <Sidebar />
            </div>
        </>
    );
}
export default Blog;