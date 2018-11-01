import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

class Counter extends Component {
  incrementIfOdd = () => {
    // Stretch Problem: Implement an increment function that
    // only increments if the counter value is odd
  };

  incrementAsync = () => {
    // Stretch Problem: Implement an increment function that
    // increments after waiting for one second
  };

  incrementCount = e => {
    e.preventDefault();
    this.props.increment(this.props.count);
  };

  decrementCount = e => {
    e.preventDefault();
    this.props.decrement(this.props.count);
  };

  render() {
    return (
      <p>
        Clicked: {this.props.count} times
        <button onClick={this.incrementCount}>+</button>
        <button onClick={this.decrementCount}>-</button>
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

const mapStateToProps = state => {
  return {
    count: state.count,
  };
};

export default connect(
  mapStateToProps,
  { increment, decrement }
)(Counter);
