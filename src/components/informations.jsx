import Ico from './ico';

const Informations = ({ items }) => {
    return (
        <div id='informations' className='w-full flex justify-start flex-wrap'>
            {items.map(({ title, ico, content }, index) =>
                <div key={index} className='flex ml-12 my-5 flex-col flex-1 min-w-[200px] max-w-[250px]'>
                    <div className='items-center flex text-gray-800'>
                        <Ico style={{ minWidth: '33px', height: '33px' }}>
                            {ico}
                        </Ico>
                        <h4 className='text-lg text-black mr-3'>{title}</h4>
                    </div>
                    <div className='text-sm text-gray-400 leading-6 mt-3'>
                        {typeof(content) === 'object' ? 
                            `${content[0]} ${content[1]}` :
                            content
                        }
                    </div>
                </div>
            )}
        </div>
    );
}
export default Informations;