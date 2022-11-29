import React from 'react'

const Search = ({ search, onSearch }) => {
    const handleChange = (event) => onSearch(event);
    //*  react Fragment
    return (
        <>
            <label className='me-2' htmlFor='search'>Search:</label>
            <input type="text" id="search" onChange={handleChange} value={search} />
        </>
    )
}

export default Search