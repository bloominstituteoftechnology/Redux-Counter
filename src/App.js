import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import SearchBar from './components/SearchBar';
import PostContainer from './containers/PostContainer';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <SearchBar />
        {this.props.postData.map((post, i) => 
          <PostContainer key={i} index={i} postData={post} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    postData: state
  };
};

export default connect(mapStateToProps)(App);
