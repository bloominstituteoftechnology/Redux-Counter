import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";

class Counter extends Component {
  incrementIfOdd = c => c % 2 !== 0 && this.props.increment(c);
  incrementAsync = c => setTimeout(_ => this.props.increment(c), 1000);

  render() {
    return (
      <p>
        Clicked: {this.props.count} times
        <button onClick={_ => this.props.increment(this.props.count)}>+</button>
        <button onClick={_ => this.props.decrement(this.props.count)}>-</button>
        <button onClick={_ => this.incrementIfOdd(this.props.count)}>
          Increment if odd
        </button>
        <button onClick={_ => this.incrementAsync(this.props.count)}>
          Increment async
        </button>
      </p>
    );
  }
}

// The mapStateToProps function specifies which portion of the
// state tree this component needs to receive. In this case,
// since our redux store is only storing the value of the count,
// this component receives the whole state. In a more complex
// redux application, though, it would receive only the relevant
// parts it needs from the state object.
const mapStateToProps = state => {
  return {
    count: state.count
  };
};

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(
  mapStateToProps,
  { increment, decrement }
)(Counter);
