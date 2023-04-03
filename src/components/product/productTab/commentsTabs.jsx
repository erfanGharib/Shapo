import { ReactComponent as IcoStar } from '../../../assets/icons/star.svg';
import Btn from '../../btn';
import Ico from '../../ico';
import Input from '../../input'

const CommentsTab = ({ productName = '' }) => {
    return (
        <>
            <h5 className='text-2xl mt-5'>
                اولین کسی باشید که به ”{productName}” نظر میدهید
            </h5>
            <div className='flex my-2'>
                {[1, 2, 3, 4, 5].map(v =>
                    <Ico className='w-4 h-4 text-yellow-400'>
                        <IcoStar />
                    </Ico>
                )}
            </div>
            <div className="py-5 w-full flex flex-wrap gap-3 items-center">
                <textarea className='w-full' rows={5} placeholder='نظر شما'></textarea>
                <div className='flex w-full gap-3'>
                    <Input placeholder='ایمیل' className='w-1/2' />
                    <Input placeholder='نام' className='w-1/2' />
                </div>
                <Btn className='btn primary-btn'>ارسال</Btn>
            </div>
        </>
    );
}
export default CommentsTab; 