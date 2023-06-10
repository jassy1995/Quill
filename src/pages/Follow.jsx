import { useState } from 'react';
import SearchInput from '../components/SearchInput';
import NavigationHeader from '../components/Navigation';
import useSearch from '../hooks/useSearch';
import { followers as items } from '../stores';
import Follower from '../components/Follower';

export default function Follow() {
    const [followers] = useState(items)
    const { items: filteredItems, searchTerm, handleSearch } = useSearch(items);
    return (
        <div className='flex flex-col space-y-8 mt-14'>
            <div className='mx-4 ss:mx-32 sm:mx-32 md:mx-32 lg:mx-32 xl:mx-32'>
                <div className='flex flex-col space-y-9'>
                    <SearchInput placeholder="Search..." value={searchTerm} onChange={handleSearch} />
                    <NavigationHeader />
                </div>
            </div>
            <div className='flex flex-col space-y-3 lg:mx-32 xl:mx-32 pb-4'>
                <h2 className='border-b font-bold mb-2 hidden sm:block'></h2>
                <div className="flex flex-col justify-between space-y-4 mx-4 lg:mx-32 xl:mx-32">
                    {followers.map((follower, index) => (
                        <Follower key={index} item={follower} />
                    ))}
                </div>
            </div>
        </div>
    )
}
