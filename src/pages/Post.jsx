import { useState } from 'react';
import SearchInput from '../components/SearchInput';
import NavigationHeader from '../components/Navigation';
import useSearch from '../hooks/useSearch';
import { articles as items } from '../stores';
import SinglePost from '../components/Post';
import Comment from '../components/Comment';

export default function Post() {
    const [posts] = useState(items)
    const { items: filteredItems, searchTerm, handleSearch } = useSearch(items);
    return (
        <div className='flex flex-col space-y-8 mt-14'>
            <div className='mx-4 ss:mx-32 sm:mx-32 md:mx-32 lg:mx-32 xl:mx-32'>
                <div className='flex flex-col space-y-9'>
                    <SearchInput placeholder="Search..." value={searchTerm} onChange={handleSearch} />
                    <NavigationHeader />
                </div>
            </div>
            <h2 className='border-b font-bold mb-2 hidden sm:block lg:mx-32 xl:mx-32'></h2>
            <div className='flex flex-col-reverse  ss:flex-row md:flex-row lg:flex-row  xl:flex-row space-x-0 ss:space-x-4 space-y-4 mx-4 pb-4'>
                <div className="flex flex-col space-y-3 my-4 ss:my-0">
                    <div className='flex justify-center items-center'>
                        <h2 className='font-bold mb-2'>comments</h2>
                    </div>
                    {posts.map((post, index) => (
                        <Comment key={index} item={post} />
                    ))}
                </div>
                <div className="flex flex-col space-y-3 w-full ss:w-[70%] md:w-[70%] lg:w-[70%] xl:w-[70%]">
                    <SinglePost item={posts[0]} />
                    <div className='w-full xs:max-w-xs sm:max-w-sm ss:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm mx-auto'>
                        <input type="text" className='border border-slate-300 form-control placeholder:text-slate-300' placeholder='write your comment' />
                    </div>
                </div>
            </div>
        </div>
    )
}
