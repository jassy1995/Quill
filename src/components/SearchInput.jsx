import { BsSearch } from "react-icons/bs"
import "../styles/searchInput.css"

const SearchInput = ({ placeholder, value, onChange }) => {
    const handleInputChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <div className='flex justify-center items-center text-center'>
            <div className="w-64 relative">
                <input className='search-input'
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={handleInputChange}
                />
                <BsSearch className="absolute top-3 right-3 text-slate-400 font-bold" />

            </div>
        </div>
    );
};

export default SearchInput;