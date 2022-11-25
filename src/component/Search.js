import React from 'react'

const Search = (props) => {
    const handleChange = (event) => props.onSearch(event);
    console.log("Search renders");

    return (
        <>
            <label htmlFor='search' className='me-2'>Search:</label>
            <input id="search" type="text" onChange={handleChange} value={props.search} />

        </>
    )
}

export default Search