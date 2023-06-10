import { BsHeart } from 'react-icons/bs'

export default function Article({ item }) {
    return (
        <div className='flex flex-col space-y-2 rounded-md bg-white border border-slate-200 shadow-sm h-[470px] w-full md:w-[300px] lg:w-[300px] xl:w-[300px] p-4 pt-8'>
            <div className='flex justify-between items-center mb-6'>
                <div className='flex items-center space-x-2'>
                    <img src={item?.user_image_url} alt="not exist" className='w-10 h-10 rounded-full object-cover' />
                    <div className='flex flex-col'>
                        <h1 className='text-slate-700'>{item?.user_name}</h1>
                        <small className='text-slate-600'>{item?.institution}</small>
                    </div>
                </div>
                <div className='flex justify-end items-start'>
                    <button className='bg-blue-500 font-bold text-white hover:bg-blue-600 px-1 rounded-sm'>Follow</button>
                </div>
            </div>
            <div className='flex flex-col space-y-2'>
                <img src={item?.post_image_url} alt="not exist" className='w-full h-[200px] object-cover' />
                <h1 className='font-semibold text-2xl text-black'>{item?.post_title}</h1>
                <div className='flex flex-col space-y-1'>
                    <small className='text-slate-500'>Created:{item?.date}</small>
                    <small className='text-slate-700 font-normal'>{item?.post_body} <button className='text-blue-500 font-bold hover:underline'>Read more</button> </small>
                </div>
                <div className='flex justify-between'>
                    <div className='flex items-end space-x-1'>
                        <BsHeart className='w-6 h-6' />
                        <small className='text-slate-500'>{item?.like_count}k</small>
                    </div>
                    <div className='flex items-end space-x-1'>
                        <small className='text-slate-500'>{item?.comment_count}k</small>
                        <img src="/comment.png" alt="not exist" className='w-6 h-6' />
                    </div>
                </div>
            </div>
        </div>
    )
}
