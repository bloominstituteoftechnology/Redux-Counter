import React, { Component } from 'react';

import './App.css';
import SearchBar from './SearchBar';
import postData from './application-data';

import PostContainer from './PostContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        {postData.map((post, i) => 
          <PostContainer key={i} postData={post} />
        )}
      </div>
    );
  }
}

export default App;
