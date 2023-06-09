import React from 'react'

export default function Article({ item }) {
    return (
        <div className='flex flex-col space-y-2 rounded-md bg-white shadow-md h-[400px] w-[300px] p-4'>
            <div className='flex justify-between items-center'>
                <img src={item?.user_image_url} alt="not exist" className='w-10 h-10 rounded-full object-cover' />
                <div className='flex flex-col'>
                    <h1 className='text-slate-700'>{item?.user_name}</h1>
                    <small className='text-slate-600'>{item?.institution}</small>
                </div>
                <div className='flex justify-end items-start'>
                    <button className='bg-blue-500 font-bold text-white hover:bg-blue-600 px-1 rounded-sm'>Follow</button>
                </div>
            </div>
            <div className='flex flex-col space-y-2'>
                <img src={item?.post_image_url} alt="not exist" className='w-full h-32 object-cover' />
                <h1 className='font-semibold text-2xl text-black'>{item?.post_title}</h1>
                <div className='flex flex-col space-y-1'>
                    <small className='text-slate-500'>Created:{item?.date}</small>
                    <small className='text-slate-700 font-normal'>{item?.post_body} <button className='text-blue-500 font-bold hover:underline'>Read more</button> </small>
                </div>
            </div>
            <div></div>

        </div>
    )
}
