import { ReactComponent as IcoStar } from '../../../assets/icons/star.svg';
import Btn from '../../btn';
import Ico from '../../ico';
import Input from '../../input'

const CommentsTab = ({ productName = '', comments }) => {
    return (
        <div className='ml-auto w-full md:w-2/3'>
            <h5 className='text-2xl mt-5'>
                اولین کسی باشید که به ”<strong>{productName}</strong>” نظر میدهید
            </h5>
            <div className='flex my-2'>
                {[1, 2, 3, 4, 5].map(v =>
                    <IcoStar key={v} className='w-4 h-4 text-yellow-400' />
                )}
            </div>
            <div className="py-5 flex flex-wrap items-center">
                <textarea className='w-full mb-3' rows={5} placeholder='نظر شما'></textarea>
                <div className='flex w-full space-3'>
                    <Input placeholder='ایمیل' className='w-1/2 mb-3 ml-3' />
                    <Input placeholder='نام' className='w-1/2 mb-3' />
                </div>
                <Btn className='btn primary-btn'>ارسال</Btn>
            </div>
        </div>
    );
}
export default CommentsTab; 