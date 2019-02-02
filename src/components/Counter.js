import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

class Counter extends Component {
  incrementIfOdd = () => {
      
  };

  incrementAsync = () => {

  };

  render() {

    return (
      <p>
        Clicked: {this.props.count} times
        <button onClick={() => /* Fill me in */ }>
            +
        </button>
        <button onClick={() => /* Fill me in */ }>
            -
        </button>
          {/* Uncomment these button tags if you got
        around to implementing the extra credit functions */}
        {/* <button onClick={this.incrementIfOdd}>
            Increment if odd
        </button>
        <button onClick={this.incrementAsync}>
            Increment async
        </button>  */}
      </p>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps, { increment, decrement })(Counter);
