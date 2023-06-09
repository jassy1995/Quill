import { useState } from 'react';
import SearchInput from '../components/SearchInput';
import NavigationHeader from '../components/Navigation';
import useSearch from '../hooks/useSearch';
import Article from '../components/Article';
import { articles } from '../stores';
import SuggestPost from '../components/SuggestPost';

export default function Home() {
    const [items] = useState(articles)
    const { items: filteredItems, searchTerm, handleSearch } = useSearch(items);
    return (
        <div className='flex flex-col space-y-8 mt-14'>
            <div className='mx-32'>
                <div className='flex flex-col space-y-9'>
                    <SearchInput placeholder="Search..." value={searchTerm} onChange={handleSearch} />
                    <NavigationHeader />
                </div>
            </div>
            <div className='flex flex-col space-y-3 ml-32 mr-14'>
                <h2 className='border-b font-bold'>Article</h2>
                <div className='flex space-x-20'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4 justify-center items-center w-[80%]">
                        {items.map((item, index) => (
                            <Article key={index} item={item} />
                        ))}
                    </div>
                    <div className="flex flex-col space-y-4 w-[20%]">
                        <small className='text-slate-800 tracking-widest'>Suggested for you</small>
                        {items.map((item, index) => (
                            <SuggestPost key={index} item={item} />
                        ))}
                        <small className='text-blue-500 hover:underline cursor-pointer'>See full list</small>
                    </div>
                </div>
            </div>
        </div>
    )
}
