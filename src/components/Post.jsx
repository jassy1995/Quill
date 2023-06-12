
export default function Follower({ item }) {
    return (
        <div className='flex flex-col justify-between space-y-2 rounded-md bg-white border border-slate-200 shadow-sm h-[360px]  md:h-[376px] lg:h-[376px] xl:h-[376px]
         w-full p-2 pb-4 sm:p-6 ss:p-6 md:p-6 lg:p-6 xl:p-6 ss:space-x-8 md:space-x-8 lg:space-x-8 xl:space-x-8'>
            <div className='flex justify-between items-start mb-2'>
                <div className='flex items-center space-x-2'>
                    <img src={item?.user_image_url} alt="not exist" className='w-10 h-10 rounded-full object-cover' />
                    <div className='flex flex-col'>
                        <h1 className='text-slate-700'>{item?.user_name}</h1>
                        <small className='text-slate-600'>{item?.institution}</small>
                    </div>
                </div>
                <div className='flex justify-end items-end mt-6'>
                    <img src={item?.post_image_url} alt="not exist" className='w-[240px] h-[120px] rounded-md object-cover' />
                </div>
            </div>
            <div className='flex flex-col space-y-4'>
                <h1 className='font-semibold text-2xl text-black'>{item?.post_title}</h1>
                <p className='font-semibold text-sm text-black'>{item?.post_body}</p>
                <div className="flex flex-col">
                    <small className="text-slate-500 text-sm font-normal">Comments: {item?.comment_count}k</small>
                    <small className="text-slate-500 text-sm font-normal">Date: {item?.date}</small>
                </div>
            </div>
        </div>
    )
}
