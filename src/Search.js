import React from 'react'

const Search = () => {
    const handleChange = (event) => console.log(event.target.value);
    return (
        <>
            <label htmlFor='search' className='me-2'>Search:</label>
            <input id="search" type="text" onChange={handleChange} />
        </>
    )
}

export default Search