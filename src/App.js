import React, { Component } from 'react';

import './App.css';
import SearchBar from './components/SearchBar';
import PostContainer from './containers/PostContainer';
import postData from './application-data';

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
