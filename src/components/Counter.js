import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../actions';
import './Counter.css';


class Counter extends Component {
    incrementIfOdd = () => {
        // Stretch Problem: Implement an increment function that
        // only increments if the counter value is odd
        if (this.props.count % 2 !== 0){
            this.props.increment();
        }
    };

    incrementAsync = () => {
        // Stretch Problem: Implement an increment function that
        // increments after waiting for one second
        setTimeout( this.props.increment, 1000);
    };

    increment = () => {
        this.props.increment()
    };

    decrement = () => {
        this.props.decrement()
    };


    render() {
        // Fill in the two button onClick methods
        // Upon clicking these buttons, the count
        // should decrement or increment accordingly
  
        return (
            <div className = 'container'>
               <div className = 'counter-container'>
                   <h1>Clicked: {this.props.count} times</h1>
                  {/* NOTE: PASSED PROP METHODS THAT ARE ANONYMOUS FUNCTIONS 
                   REQUIRE () FOR RETURN CALLBACKS */}
                   <div className = 'counter-buttons'>
                   <button onClick={() => this.props.increment()}>
                    +
                   </button>
                
                  {/* NOTE: PASSED PROP METHODS THAT ARE ANONYMOUS FUNCTIONS 
                   REQUIRE () FOR RETURN CALLBACKS */}
                   <button onClick={() => this.props.decrement()}>
                    -
                   </button>
                   </div>
                 {/* Uncomment these button tags if you got
                around to implementing the extra credit functions */}
                </div>

                <div className = 'bonus-buttons'>
                {/* NOTE: CONSTRUCTOR DECLARED METHODS SHOULD NOT HAVE (), 
            OR THEY WILL CALL INFINITELY */}
                <button onClick={this.incrementIfOdd}>
                    Increment if odd
                </button>
                <button onClick={this.incrementAsync}>
                    Increment async
                </button>
                <button onClick={() => this.props.reset()}>RESET</button>
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
    console.log('state', state);
    return {
        count: state.count
    };
};

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(mapStateToProps, { increment, decrement, reset })(Counter);