import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

class Counter extends Component {
    incrementIfOdd = () => {
        if (this.props.count % 2 === 1) {
            this.props.increment();
        }
    };
    
    resetIfPrime = () => {
        if (this.props.count === 1) return;
        let factors = 1;
        for(let i = 1; i <=Math.sqrt(this.props.count); i++) {
            if(this.props.count % i === 0) {
                factors++;
            }
        }
        if(factors === 2) {
            for(let i = 0; i < this.props.count; i++) {
                this.props.decrement();
            }
        }
    }

    incrementAsync = () => {
        setTimeout(() => {
            this.props.increment();
        }, 1000);
    };

    render() {
        return (
            <p>
                Clicked: {this.props.count} times
                {" "}
                <button onClick={ this.props.increment }>
                    +
                </button>
                {" "}
                <button onClick={ this.props.decrement }>
                    -
                </button>
                {" "}
                <button onClick={this.incrementIfOdd}>
                    Increment if odd
                </button>
                {" "}
                <button onClick={this.incrementAsync}>
                    Increment async
                </button>
                {" "}
                <button onClick={this.resetIfPrime}>
                    Is this prime (go to 0 if yes)?
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