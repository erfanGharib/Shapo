import Btn from "../components/btn";
import Informations from "../components/contactUs/informations";
import Input from "../components/input";
import PageInfo from "../components/pageInfo";

const ContactUs = () => {
    return (
        <div className='flex flex-col'>
            <PageInfo title='ارتباط با ما' path='ارتباط با ما' />
            <div className='w-5/6 mx-auto flex flex-col items-center my-14'>
                <Informations />
                <hr className='my-14' />

                <div className='flex w-full md:w-2/3 flex-col h-96'>
                    <h3 className='text-xl font-bold'>با ما در ارتباط باشید</h3>
                    <form className='flex flex-col my-5 w-full gap-3'>
                        <div className='w-full flex gap-3'>
                            <Input placeholder='نام' className='w-full md:w-1/2' />
                            <Input placeholder='ایمیل' className='w-full md:w-1/2' />
                        </div>
                        <Input placeholder='موضوع' className='w-full md:w-full' />
                        <textarea
                            className='w-full'
                            placeholder='متن پیام'
                            rows="5"
                        ></textarea>

                        <Btn className='btn primary-btn'>ارسال</Btn>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default ContactUs;