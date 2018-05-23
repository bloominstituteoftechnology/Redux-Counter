import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../actions';
import store from '../index.js'

class Counter extends Component {
    incrementIfOdd = () => {
        // Stretch Problem: Implement an increment function that
        // only increments if the counter value is odd
        if(this.props.count%2){
            store.dispatch({
                type: 'INCREMENT',
                payload: 1
            })
            //this.props.increment()
        }

    };

    incrementAsync = () => {
        // Stretch Problem: Implement an increment function that
        // increments after waiting for one second
        //setTimeout(()=> this.props.increment(), 1000)
        setTimeout(()=> {
            console.log('increment: ', increment);
            console.log('this.props.increment: ', this.props.increment);
            store.dispatch(increment())}, 1000)
    };
        //if count is even, increase count by 1 after 1 second
    dreSean = () => {
        if(this.props.count%2===0){
            setTimeout( () => {
                this.props.increment();
                this.props.increment()}, 1000)
        }
    }

    render() {
        // Fill in the two button onClick methods
        // Upon clicking these buttons, the count
        // should decrement or increment accordingly
        console.log('Counter Props: ',this.props.increment)
        return (
            <p>
                Clicked: {this.props.count} times
                <br></br>
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
                <button onClick={this.incrementAsync}>
                    Increment async
                </button>
                <button onClick={this.dreSean}>
                    Increment Dre'Sean
                </button>
                <button onClick={() => this.props.reset() }>
                    RESET
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
export default connect(mapStateToProps, { increment, decrement, reset })(Counter);