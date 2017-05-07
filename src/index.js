import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from "./components/search_bar";

const API_KEY='AIzaSyD5YRi9nANkFkNiKiw6p_8ioIlcSZoy4Vo';
// create new componenet
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

// TUrn compotnent into HTML & Put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
