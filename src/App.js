import React, { useState, useEffect } from 'react'
import List from './component/List'
import Search from './component/Search'
import { list } from "./data/dataTemplate"
import { useSemiPersistentState } from './hooks/useSemiPersistentState'

const stories = [...list]

//* Custom hooks
const App = () => {
  const [searchTerm, setSearchTerm] = useSemiPersistentState("search", "React");

  const handleSearch = (event) => setSearchTerm(event.target.value)
  const searchStories = stories.filter(story => story.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className='container my-4'>
      <h1>Hacker Stories</h1>
      <Search onSearch={handleSearch} search={searchTerm} />
      <p className='display-6'><strong>Searching for {searchTerm}</strong></p>
      <hr />
      <List list={searchStories} />
    </div>
  )
}

export default App