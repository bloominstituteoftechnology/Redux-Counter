import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';



class Counter extends Component {
    incrementIfOdd = () => {
        // Stretch Problem: Implement an increment function that
        // only increments if the counter value is odd
        if (this.props.count >= 0) {
            if (this.props.count % 2 !== 0) {
                this.props.increment();
            }
        } else {
            if (this.props.count % 2 !== 0) {
                this.props.decrement();
            }
        }
        // if (this.props.count % 2 !== 0) {
        //     this.props.increment();
        // }
    };

    incrementAsync = () => {
        // Stretch Problem: Implement an increment function that
        // increments after waiting for one second
        if (this.props.count >= 0) {
            setTimeout(() => this.props.increment(), 1000)
        } else {
            setTimeout(() => this.props.decrement(), 1000)
        }
        
    };



    render() {
        // Fill in the two button onClick methods
        // Upon clicking these buttons, the count
        // should decrement or increment accordingly
        // const Add = (e, count) => {
        //     e.preventDefault()
        //     this.props.increment
        // }
        

        return (
            <p>
                Clicked: {this.props.count} times
                <button onClick={count => this.props.increment(count) }>
                    +
                </button>
                <button onClick={count => this.props.decrement(count) }>
                    -
                </button>
                 {/* Uncomment these button tags if you got
                around to implementing the extra credit functions */}
                <button onClick={this.incrementIfOdd}>
                    Increment or Decrement if odd
                </button>
                <button onClick={this.incrementAsync}>
                    Increment or Decrement async
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
        count: state.count
    };
};

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(mapStateToProps, { increment, decrement })(Counter);
