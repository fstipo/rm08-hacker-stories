import React, { useState,useEffect }  from 'react';
import './App.css';
import List from './component/List';
import Search from './component/Search';
import { list } from "./data/dataTemplate"

const App = () => {
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem("search") || "React");
  
  useEffect(() => {
    localStorage.setItem("search",searchTerm)
  }, [searchTerm])

  const handleSearch=(event)=> {
    setSearchTerm(event.target.value)
  }
  
  const searchStories = list.filter(story=> story.title.toLowerCase().includes(searchTerm.toLowerCase())) 

  return (
    <div className="container">
      <h1>My hacker stories</h1>
      <Search onSearch={handleSearch} search={searchTerm}/>
      <p className='display-3'>Searching for <strong>{searchTerm}</strong></p>
      <hr />
    <List list={searchStories}/> 
    </div>
  );
}

export default App;
