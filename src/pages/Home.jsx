import { useState } from 'react';
import SearchInput from '../components/SearchInput';
import NavigationHeader from '../components/Navigation';
import useSearch from '../hooks/useSearch';
import Article from '../components/Article';
import { articles } from '../stores';
import SuggestPost from '../components/SuggestPost';

export default function Home() {
    const show = `xxs:flex xs:flex ss:flex sm:flex md:flex lg:flex xl:flex`
    const [items] = useState(articles)
    const { items: filteredItems, searchTerm, handleSearch } = useSearch(items);

    return (
        <>
            <div className='flex flex-col space-y-8 mt-14'>
                <div className='mx-4 ss:mx-32 sm:mx-32 md:mx-32 lg:mx-32 xl:mx-32'>
                    <div className='flex flex-col space-y-9'>
                        <SearchInput placeholder="Search..." value={searchTerm} onChange={handleSearch} />
                        <NavigationHeader />
                    </div>
                </div>
                <div className='flex flex-col space-y-3 mx-4 lg:ml-32 xl:ml-32 pb-4'>
                    <h2 className='border-b font-bold mb-2 hidden sm:block'>Article</h2>
                    <div className='flex flex-col space-y-4 lg:flex-row xl:flex-row lg:space-x-4 xl:space-x-20'>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-x-1 gap-y-2 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-4 justify-center items-center w-full md:w-[80%] lg:w-[80%] xl:w-[80%]">
                            {items.map((item, index) => (
                                <Article key={index} item={item} />
                            ))}
                        </div>

                        <div className="flex flex-col space-y-4 w-full  md:w-[20%] lg:w-[20%] xl:w-[20%]">
                            <small className='text-slate-800 tracking-widest'>Suggested for you</small>
                            {items.map((item, index) => (
                                <SuggestPost key={index} item={item} />
                            ))}
                            <small className='text-blue-500 hover:underline cursor-pointer'>See full list</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}