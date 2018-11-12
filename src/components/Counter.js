import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

    incrementIfOdd = () => {
        // Stretch Problem: Implement an increment function that
        // only increments if the counter value is odd
    };

    incrementAsync = () => {
        // Stretch Problem: Implement an increment function that
        // increments after waiting for one second
    };


    handleClick(e) {
      const { count, increment, decrement } = this.props;

      switch (e.target.id) {
        case 'increment':
          increment(count);
          // console.log(count);
          break;
        case 'decrement':
          decrement(count);
          console.log(count);
          break;
        default:
          console.error('Error: Unknown action', e);
      }
    }

    render() {
        // Fill in the two button onClick methods
        // Upon clicking these buttons, the count
        // should decrement or increment accordingly
        const { count } = this.props;

        return (
            <p>
              Clicked: {count} times
              <button id='increment' onClick={this.handleClick}>+</button>
              <button id='decrement' onClick={this.handleClick}>-</button>
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
const mapStateToProps = (state) => {
    return {
        count: state.count
    };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: countNum => dispatch(increment(countNum)),
    decrement: countNum => dispatch(decrement(countNum)),
  };
};

/*

    <button onClick={() =>  Fill me in }>
        +
    </button>
    <button onClick={() =>  Fill me in  }>
        -
    </button>
     { Uncomment these button tags if you got
    around to implementing the extra credit functions }
    { <button onClick={this.incrementIfOdd}>
        Increment if odd
    </button>
    <button onClick={this.incrementAsync}>
        Increment async
    </button>  }
    */

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
