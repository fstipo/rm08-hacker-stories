import React from 'react';
import './App.css';
import List from './component/List';
import Search from './component/Search';
import { list } from "./data/dataTemplate"

const App = () => {
console.log("App renders");
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
