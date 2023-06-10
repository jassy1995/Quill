
export default function Follower({ item }) {
    return (
        <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between space-y-2 rounded-md bg-white border border-slate-200 shadow-sm h-[520px]  md:h-[340px] lg:h-[340px] xl:h-[340px]
         w-full p-2 pb-4 sm:p-6 ss:p-6 md:p-6 lg:p-6 xl:p-6 ss:space-x-8 md:space-x-8 lg:space-x-8 xl:space-x-8'>
            <div className="flex flex-col  md:w-96 lg:w-96 xl:w-96">
                <div className='flex justify-between items-center mb-2'>
                    <div className='flex items-center space-x-2'>
                        <img src={item?.user_image_url} alt="not exist" className='w-10 h-10 rounded-full object-cover' />
                        <div className='flex flex-col'>
                            <h1 className='text-slate-700'>{item?.user_name}</h1>
                            <small className='text-slate-600'>{item?.institution}</small>
                        </div>
                    </div>
                    <div className='flex justify-end items-start'>
                        <button className='bg-blue-500 font-bold text-white hover:bg-blue-600 px-1 rounded-sm'>Unfollow</button>
                    </div>
                </div>
                <div className='flex flex-col space-y-10 ss:px-10 md:px-10 lg:px-10 xl:px10 pl-12'>
                    <div className='flex flex-col space-y-1'>
                        <div className='flex justify-between items-center'>
                            <small className="text-slate-500 text-sm font-normal">Follows: {item?.follows}k</small>
                            <small className="text-slate-500 text-sm font-normal">Followings: {item?.following}k</small>
                        </div>
                        <div className='flex justify-between items-center'>
                            <small className="text-slate-500 text-sm font-normal">Posts: {item?.posts}k</small>
                            <small className="text-slate-500 text-sm font-normal">Join date: {item?.date}k</small>
                        </div>
                    </div>
                    <h1 className='font-semibold text-2xl text-black'>{item.user_title}</h1>
                </div>
            </div>
            <div className='flex flex-col space-y-2 bg-black'>
                <img src={item?.post_image_url} alt="not exist" className='w-[500px] h-[280px] rounded-md object-cover' />
            </div>
        </div>
    )
}
