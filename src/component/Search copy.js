import React from 'react'

const Search = ({ search, onSearch }) => {
    const handleChange = (event) => onSearch(event);
    return (
        <>
            <label htmlFor='search' className='me-2'>Search:</label>
            <input id="search" type="text" onChange={handleChange} value={search} />
        </>
    )
}

export default Search