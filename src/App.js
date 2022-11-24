import React from 'react';
import './App.css';
import List from './List';
import Search from './Search';

const App = () => {

  return (
    <div className="container">
      <h1>My hacker stories</h1>
      <Search/>
      <hr />
    <List/>
    <div className='display-3'>Page 32  Classes</div>
    </div>
  );
}

export default App;
