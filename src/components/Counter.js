import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";

import "./counter.css";

class Counter extends Component {
  incrementIfOdd = () => {
    // Stretch Problem: Implement an increment function that
    // only increments if the counter value is odd
    if (this.props.count % 2 !== 0) {
      this.props.increment();
      alert("Odd Increase");
    }
  };

  incrementAsync = () => {
    // Stretch Problem: Implement an increment function that
    // increments after waiting for one second
    setTimeout(() => {
      this.props.increment();
    }, 1000);
  };

  render() {
    // Fill in the two button onClick methods
    // Upon clicking these buttons, the count
    // should decrement or increment accordingly
    return (
      <div>
        <h1>
          This is a simple counter app using Redux. The data is handled locally,
          so the counter will reset to 0 if the page is refreshed. The counter
          state is held in the Redux store. The - + buttons increase or decrease
          the counter by 1. The increment if odd button will increase the count
          if the current count is an odd number. The async button will increase
          the count by 1 after a one-second delay.{" "}
        </h1>
        <h1>Clicked: {this.props.count} times</h1>
        <button className="butt" onClick={() => this.props.increment()}>
          + 1
        </button>
        <button className="butt" onClick={() => this.props.decrement()}>
          - 1
        </button>
        {/* Uncomment these button tags if you got
                around to implementing the extra credit functions */}
        <button onClick={this.incrementIfOdd}>Increment If Odd</button>
        <button onClick={this.incrementAsync}>Increment Async</button>
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
export default connect(mapStateToProps, { increment, decrement })(Counter);
