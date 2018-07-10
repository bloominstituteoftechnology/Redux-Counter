import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

class Counter extends Component {
    incrementIfOdd = () => {
        // Stretch Problem: Implement an increment function that
        // only increments if the counter value is odd
        // if (count%2 !==0 then increment})
        if(this.props.count % 2 !==0) {
            this.props.increment();
        }
    };
    incrementIfEven = () => {
        
        if(this.props.count % 2 ===0) {
            this.props.increment();
        }
    };

    incrementAsync = () => {
        // Stretch Problem: Implement an increment function that
        // increments after waiting for one second
        //timout thing
        setTimeout(()=> this.props.increment(), 1000 )
    };
    decrementAsync = () => {
        
        setTimeout(()=> this.props.decrement(), 1500 )
    };

    render() {
        // Fill in the two button onClick methods
        // Upon clicking these buttons, the count
        // should decrement or increment accordingly
        return (
            <p>
                Clicked: {this.props.count} times {" "}
                <button onClick={() => this.props.increment() }>
                    +
                </button>
                <button onClick={() => this.props.decrement() }>
                    -
                </button>
                 {/* Uncomment these button tags if you got
                around to implementing the extra credit functions */}
                 <button onClick={this.incrementIfOdd}>
                    Increment if odd
                </button>
                <button onClick={this.incrementIfEven}>
                    Increment if even
                </button>
                <button onClick={this.incrementAsync}>
                    Increment async
                </button> 
                <button onClick={this.decrementAsync}>
                    Decrement async
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