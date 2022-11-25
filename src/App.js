import React from 'react';
import './App.css';
import List from './List';
import Search from './Search';
import { list } from "./data/dataTemplate"

const App = () => {

  return (
    <div className="container">
      <h1>My hacker stories</h1>
      <Search/>
      <hr />
    <List stories={list}/>
    </div>
  );
}

export default App;
