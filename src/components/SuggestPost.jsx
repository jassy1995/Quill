import React from 'react'

export default function SuggestPost({ item }) {
    return (
        <div className='flex space-x-3 items-center border border-slate-200 shadow-sm rounded-md p-2 cursor-pointer'>
            <img src={item?.user_image_url} alt="not exist" className='w-10 h-10 rounded-full object-cover' />
            <div className='flex flex-col space-y-1'>
                <small className='text-slate-700'>{item?.user_name}</small>
                <h1 className='text-slate-900 font-semibold'>{item?.post_title}</h1>
            </div>
        </div>
    )
}
