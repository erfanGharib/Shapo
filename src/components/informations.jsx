import Ico from './ico';

const Informations = ({ items }) => {
    return (
        <div id='informations' className='w-5/6 flex justify-start flex-wrap gap-y-5 gap-x-12'>
            {items.map(({ title, ico, content }, index) =>
                <div key={index} className='flex flex-col gap-3 flex-1 min-w-[200px] max-w-[250px]'>
                    <div className='gap-2 items-center flex text-gray-800'>
                        <Ico style={{ minWidth: '33px', height: '33px' }}>
                            {ico}
                        </Ico>
                        <h4 className='text-lg text-black'>{title}</h4>
                    </div>
                    <div className='text-sm text-gray-400 leading-6'>
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