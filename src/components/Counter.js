import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

class Counter extends Component {
    incrementIfOdd = value => {
        // Stretch Problem: Implement an increment function that
        // only increments if the counter value is odd
        if(value % 2 !== 0){
            return this.props.increment(value);
        }
    };

    incrementAsync = value => {
        // Stretch Problem: Implement an increment function that
        // increments after waiting for one second
        sleep(1000);
        return this.props.increment(value);
    };
    
   

    render() {
        // Fill in the two button onClick methods
        // Upon clicking these buttons, the count
        // should decrement or increment accordingly
        return (
            <p>
                Clicked: {this.props.count} times
                <button value={this.props.count} onClick={event => this.props.increment(event.target.value )}>
                    +
                </button>
                <button value={this.props.count} onClick={event => this.props.decrement(event.target.value ) }>
                    -
                </button>
                 {/* Uncomment these button tags if you got
                around to implementing the extra credit functions */}
                  <button value={this.props.count} onClick={event => this.incrementIfOdd(event.target.value)}>
                    Increment if odd
                </button>
                <button value={this.props.count} onClick={event => this.incrementAsync(event.target.value)}>
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
export default connect(mapStateToProps, { increment, decrement })(Counter);