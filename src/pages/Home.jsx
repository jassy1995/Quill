import { useState } from 'react';
import SearchInput from '../components/SearchInput';
import NavigationHeader from '../components/Navigation';
import useSearch from '../hooks/useSearch';

export default function Home() {
    const [items] = useState([])
    const { items: filteredItems, searchTerm, handleSearch } = useSearch(items);
    return (
        <div className='mx-32 flex flex-col space-y-8 mt-14'>
            <div className='flex flex-col space-y-9'>
                <SearchInput placeholder="Search..." value={searchTerm} onChange={handleSearch} />
                <NavigationHeader />
            </div>
            <div className='flex flex-col space-y-3'>
                <h2 className='border-b font-bold'>Article</h2>
                <div>Home Page Work!</div>
            </div>
        </div>
    )
}
