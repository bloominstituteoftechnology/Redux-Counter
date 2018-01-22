import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, incrementIfOdd, decrement } from '../actions';

class Counter extends Component {
  // I was having trouble figuring out how to do this in the reducer
  incrementAsync = () => {
    setTimeout(() => this.props.increment(), 1000);
  };

  render() {
    // Fill in the two button onClick methods
    // Upon clicking these buttons, the count
    // should decrement or increment accordingly
    return (
      <div className="container">
        <p>
          Clicked: {this.props.count} times
        </p>
        <div>
          <button className="increment" onClick={ this.props.increment }>
            Increment
          </button>
          <button className="decrement" onClick={ this.props.decrement }>
            Decrement
          </button>
        </div>
        <br />
        <div>
          <button className="increment odd" onClick={this.props.incrementIfOdd}>
            Increment if odd
          </button>
          <button className="increment async" onClick={this.incrementAsync}>
            Increment async
          </button>
        </div>
      </div>
    );
  }
}

// The mapStateToProps function specifies which portion of the
// state tree this component needs to receive. In this case,
// since our redux store is only storing the value of the count,
// this component receives the whole state. In a more complex
// redux application, though, it would receive only the relevant
// parts it needs from the state object.
const mapStateToProps = (state) => {
  return {
    count: state
  };
};

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(mapStateToProps, { increment, incrementIfOdd, decrement })(Counter);
