import React, { useState } from 'react'

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = (event) => setSearchTerm(event.target.value);
    console.log("Search renders");
    return (
        <>
            <label htmlFor='search' className='me-2'>Search:</label>
            <input id="search" type="text" onChange={handleChange} />
            <p className='display-3'>Searching for <strong>{searchTerm}</strong></p>
        </>
    )
}

export default Search